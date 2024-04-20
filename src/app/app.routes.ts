import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { CallComponent } from './components/call/call.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'call', component: CallComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent}
];
