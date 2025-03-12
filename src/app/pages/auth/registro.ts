import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { RegistroService } from '../service/registro.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-registro',
    standalone: true,
    providers: [RegistroService, MessageService],
    imports: [ToastModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    template: `
        <p-toast />
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Faça seu registro no OrderFlow</div>
                            <span class="text-muted-color font-medium">Insira suas informações</span>
                        </div>

                        <div>
                            <label for="usuario" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Usuário</label>
                            <input pInputText id="usuario" type="text" placeholder="Crie seu usuário" class="w-full md:w-[30rem] mb-8" [(ngModel)]="usuario" />

                            <label for="email" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email" type="text" placeholder="Digite seu endereço de email" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />

                            <label for="senha" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
                            <p-password id="senha" [(ngModel)]="senha" placeholder="Crie sua senha" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-4 gap-8">
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Já tem um login? Entre</span>
                            </div>

                            <p-button label="Registrar" styleClass="w-full" (onClick)="salvar()"></p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class RegistroComponent {;
    usuario: string = '';
    email: string = '';
    senha: string = '';

    constructor(private router: Router, private registroService: RegistroService, private message: MessageService) { }

    voltarParaLogin() {
        this.router.navigate(['/auth/login']);
    }

    salvar() {
        let body = {
            nomeUsuario: this.usuario,
            emailUsuario: this.email,
            senhaUsuario: this.senha
        };

        this.registroService.salvar(body).subscribe((res) => {
            this.message.add({severity: 'success', summary: 'Registro', detail: 'Registro efetuado com sucesso!'});
            this.router.navigate(['/auth/login']);
        });

    }

}
