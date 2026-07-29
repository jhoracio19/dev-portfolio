import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject as injectAnalytics } from '@vercel/analytics';
import AOS from 'aos';
import 'aos/dist/aos.css';

injectAnalytics();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

AOS.init({
  duration: 800,
  once: true
});
