import { z } from "zod";

export const searchSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    title: z
        .string()
        .nonempty({ message: "A pesquisa não pode ser vazia" })
        .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ter apenas espaços" }), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
});