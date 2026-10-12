import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-product-demo',
  standalone: true,
  templateUrl: './product-demo.html',
  styleUrl: './product-demo.css',
})
export class ProductDemo {
  private language = inject(LanguageService);
  en = computed(() => this.language.lang() === 'en');
  view = signal<'experience' | 'architecture'>('experience');
  step = signal(0);
  draft = signal('');
  foods = signal<string[]>([]);
  done = signal(false);
  action = signal<'food' | 'task'>('food');
  lastFood = signal('');
  feedback = signal<'added' | 'completed' | 'restored' | 'reset' | null>(null);
  error = signal<'empty' | 'long' | 'duplicate' | 'limit' | null>(null);
  copy = computed(() => this.en() ? {
    title: 'Try how I build', intro: 'A small piece of RemindHome. Explore the interface, then follow the action behind it.',
    experience: 'The experience', architecture: 'Behind the interface', demo: 'Interactive sample',
    note: 'Example data, only in this page. No account or connection to your home.',
    fridge: 'Your fridge', item: 'Food name', placeholder: 'For example, milk', add: 'Add food',
    task: 'A little less to do', taskName: 'Water the plants', complete: 'Mark as done', undo: 'Undo completion',
    explain: 'What happens behind the scenes?', reset: 'Reset demo', eggs: 'Eggs', apples: 'Apples',
    added: 'Added to the demo fridge:', completed: 'Task completed in the demo.', restored: 'Task pending again.', resetMessage: 'Demo reset.',
    empty: 'Enter a food name.', long: 'Use up to 100 characters.', duplicate: 'That food is already in the demo.', limit: 'The demo holds 8 foods. Reset it to try again.',
    trace: 'Follow an action', foodTrace: 'Add a food', taskTrace: 'Complete a task', source: 'Read the actual code',
    architectureNote: 'Simplified walkthrough of the real product. This demo updates local state; it does not run these server operations.',
  } : {
    title: 'Prueba cómo construyo', intro: 'Una pequeña parte de RemindHome. Explora la interfaz y después sigue la acción por dentro.',
    experience: 'La experiencia', architecture: 'Detrás de la interfaz', demo: 'Muestra interactiva',
    note: 'Datos de ejemplo, solo en esta página. Sin cuenta ni conexión con tu hogar.',
    fridge: 'Tu refrigerador', item: 'Nombre del alimento', placeholder: 'Por ejemplo, leche', add: 'Añadir alimento',
    task: 'Un pendiente menos', taskName: 'Regar las plantas', complete: 'Marcar como hecha', undo: 'Deshacer tarea completada',
    explain: '¿Qué ocurre detrás?', reset: 'Reiniciar demo', eggs: 'Huevos', apples: 'Manzanas',
    added: 'Añadido al refrigerador de ejemplo:', completed: 'Tarea completada en la demo.', restored: 'La tarea vuelve a estar pendiente.', resetMessage: 'Demo reiniciada.',
    empty: 'Escribe el nombre de un alimento.', long: 'Usa un máximo de 100 caracteres.', duplicate: 'Ese alimento ya está en la demo.', limit: 'La demo admite 8 alimentos. Reiníciala para volver a probar.',
    trace: 'Sigue una acción', foodTrace: 'Añadir un alimento', taskTrace: 'Completar una tarea', source: 'Ver el código real',
    architectureNote: 'Recorrido simplificado del producto real. Esta demo actualiza datos locales; no ejecuta estas operaciones de servidor.',
  });
  steps = computed(() => {
    const food = this.action() === 'food';
    return this.en() ? [
      { title: 'Interface', tech: 'Next.js · React', body: food ? 'The food form collects a name, category and expiry tracking. This sample lets you try the name field.' : 'A task form invokes completarTarea with the selected task ID.' },
      { title: 'Session & rules', tech: 'Server Action', body: food ? 'crearItem obtains the active home and session, trims the name and checks its length, category, tracking and owner membership.' : 'completarTarea obtains the home and session, then reads the task filtered by its ID and casa_id to calculate whether it was completed on time.' },
      { title: 'Storage', tech: 'Supabase · PostgreSQL', body: food ? 'The server inserts into items_refri with casa_id and creado_por. Row Level Security policies restrict access to home members.' : 'The server records the completion in historial_tareas. One-off tasks are removed; recurring tasks have their last execution updated.' },
      { title: 'Updated view', tech: 'Next.js redirect', body: food ? 'On success, the action redirects to the dashboard. Invalid input or a database error returns to the form with an error.' : 'The action redirects to the task list so the next state is displayed.' },
    ] : [
      { title: 'Interfaz', tech: 'Next.js · React', body: food ? 'El formulario recoge nombre, categoría y seguimiento de caducidad. Esta muestra permite probar el campo de nombre.' : 'Un formulario de tarea invoca completarTarea con el identificador de la tarea seleccionada.' },
      { title: 'Sesión y reglas', tech: 'Server Action', body: food ? 'crearItem obtiene la casa activa y la sesión, recorta espacios del nombre y comprueba longitud, categoría, seguimiento y pertenencia del propietario a la casa.' : 'completarTarea obtiene la casa y la sesión. Lee la tarea por su identificador y casa_id para calcular si se completó a tiempo.' },
      { title: 'Almacenamiento', tech: 'Supabase · PostgreSQL', body: food ? 'El servidor inserta en items_refri con casa_id y creado_por. Las políticas de Row Level Security restringen el acceso a miembros de la casa.' : 'El servidor registra la ejecución en historial_tareas. Elimina las tareas únicas y actualiza la última ejecución de las recurrentes.' },
      { title: 'Vista actualizada', tech: 'Next.js redirect', body: food ? 'Si todo va bien, la acción redirige al dashboard. Los datos inválidos o un error de base de datos devuelven al formulario con un error.' : 'La acción redirige a la lista de tareas para mostrar el nuevo estado.' },
    ];
  });
  source = computed(() => 'https://github.com/jhoracio19/home-mvp/blob/0ddd2fb700d4b646bfb795f4638280421d636ddd/src/app/%5Blocale%5D/(app)/' + (this.action() === 'food' ? 'refri' : 'tareas') + '/actions.ts');

  add(event: Event) {
    event.preventDefault();
    const name = this.draft().trim();
    const existing = [this.copy().eggs, this.copy().apples, ...this.foods()];
    const error = !name ? 'empty' : name.length > 100 ? 'long' : existing.some(item => item.toLocaleLowerCase() === name.toLocaleLowerCase()) ? 'duplicate' : this.foods().length >= 6 ? 'limit' : null;
    this.error.set(error);
    if (error) { this.feedback.set(null); return; }
    this.foods.update(items => [...items, name]);
    this.lastFood.set(name);
    this.draft.set('');
    this.action.set('food');
    this.feedback.set('added');
  }
  toggleTask() {
    this.done.update(value => !value);
    this.action.set('task');
    this.feedback.set(this.done() ? 'completed' : 'restored');
  }
  explain() { this.step.set(0); this.view.set('architecture'); }
  reset() {
    this.foods.set([]); this.draft.set(''); this.done.set(false); this.error.set(null);
    this.lastFood.set(''); this.action.set('food'); this.step.set(0); this.feedback.set('reset');
  }
}
