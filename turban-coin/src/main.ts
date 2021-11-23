import 'reflect-metadata'; // Import only once
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { cid, container } from 'inversify-props';
import axios from "axios";
import LanguageService from '@/services/language/LanguageService';
import { LanguageServiceConstructor, LanguageServiceFactory } from "@/services/language/LanguageService";
import LanguageDto from '@/classes/dtos/LanguageDto';
import { Context } from '@popperjs/core';

axios.get("/language/language.json")
     .then(response => {
        const languageDto = response.data as LanguageDto;

        container.bind<() => LanguageService>("LanguageServiceFactory").toFactory<LanguageService>((context) => {
            const languageService = new LanguageService(languageDto);
            return () => languageService;
        });
        createApp(App).mount('#app')
     });
