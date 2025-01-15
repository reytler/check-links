import puppeteer from "puppeteer";

export type TResultCheck = {
    text: unknown,
    ok: boolean,
    link: string
    html: string
}

export async function verifyLinks(url:string,expectedLink: string): Promise<TResultCheck[]>{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const results: Array<TResultCheck> = new Array<TResultCheck>()

    try {
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
        console.log(error)
        return results
    }
}