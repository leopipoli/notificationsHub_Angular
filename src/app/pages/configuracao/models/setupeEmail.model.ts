export class SetupEmailModel {
    idSetupEmail?: number; // idSetupEmail é opcional
    idConfiguracao!: number;
    nomeServidorSMTP!: string;
    portaEnvio!: number;
    login!: string;
    senha!: string;
    nomeRemetente!: string;
    emailRemetente!: string;
}
