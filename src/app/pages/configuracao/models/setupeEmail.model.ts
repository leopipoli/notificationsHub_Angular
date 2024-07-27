export class SetupEmailModel {
    idSetupEmail?: number; // idSetupEmail é opcional
    idConfiguracao!: number;
    nomeServidorSMTP!: string;
    portaEnvio!: string;
    login!: string;
    senha!: string;
    nomeRemetente!: string;
    emailRemetente!: string;
}
