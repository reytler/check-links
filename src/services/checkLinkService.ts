import { CustomError } from "@/Class/CustomError";
import puppeteer from "puppeteer";

export type TResultCheck = {
    text: unknown,
    ok: boolean,
    link: string
    html: string
}

export async function verifyLinks(url:string,expectedLink: string): Promise<TResultCheck[]>{
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
    
        const results: Array<TResultCheck> = new Array<TResultCheck>()
        await page.goto(url,{ waitUntil: 'networkidle2' });
        await page.title();
    
        const values = await page.$$eval('a', anchors => anchors.map(anchor=>({
            text: anchor.textContent,
            href: anchor.href,
            html: anchor.innerHTML
        })))
    
        values.map(value=>{
            results.push({
                text: value.text,
                html: value.html,
                link: value.href,
                ok: value.href === expectedLink
            })
        })
        await browser.close();
        return results
        
    } catch (error:unknown) {
        if(error instanceof Error && error.message === 'Protocol error (Page.navigate): Cannot navigate to invalid URL'){
            throw new CustomError('A URL da landing page é inválida!',500)
        }
        throw new CustomError('Erro interno na verificação do link',500)
    }
}