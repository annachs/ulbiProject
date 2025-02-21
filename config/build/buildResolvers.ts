import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // не нужно указывать расширения файлов при их объявлении
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // главный файл для каждого модуля
        alias: {}, // элиас для обращения по абсолютным путям, можно задать @, тогда будет @/shared
    };
}
