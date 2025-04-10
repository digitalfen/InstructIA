import { installCursor } from './cursor-installer';

export interface InstallerOptions {
  language?: string;
}

export type InstallerFunction = (options: InstallerOptions) => Promise<void>;

/**
 * Registro de instaladores disponíveis para diferentes ambientes
 */
export const installers: Record<string, InstallerFunction> = {
  'cursor': installCursor,
  // Adicione outros instaladores aqui no futuro
  // 'windsurf': installWindsurf,
  // 'vscode': installVSCode,
};

/**
 * Verifica se um instalador está disponível para o ambiente especificado
 */
export function isInstallerAvailable(environment: string): boolean {
  return environment in installers;
}

/**
 * Obtém o instalador para o ambiente especificado
 */
export function getInstaller(environment: string): InstallerFunction | undefined {
  return installers[environment];
}

/**
 * Lista todos os ambientes suportados
 */
export function getSupportedEnvironments(): string[] {
  return Object.keys(installers);
} 