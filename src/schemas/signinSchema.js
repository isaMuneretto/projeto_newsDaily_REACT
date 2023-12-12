import { z } from "zod";

export const signinSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
        password: z
        .string()
        .min(6, { message: "A senha deve ter no minimo 6 caracteres" }), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
});