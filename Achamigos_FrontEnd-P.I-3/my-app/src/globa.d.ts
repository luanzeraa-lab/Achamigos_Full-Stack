import { IEndereco } from '@/app/CadastroUsuario/IEndereco';

declare global {
  interface Window {
    getEndereco?: () => IEndereco;
  }
}
