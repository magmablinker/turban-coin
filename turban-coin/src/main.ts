import 'reflect-metadata'; // Import only once
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { cid, container } from 'inversify-props';
import LanguageService from '@/services/language/LanguageService';
import LanguageDto from '@/classes/dtos/LanguageDto';

container.addSingleton<LanguageService>(LanguageService);

createApp(App).mount('#app')
