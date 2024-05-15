import { type Endpoints, type NSFW, type SFW } from "./types"

const base = "https://api.waifu.pics"

function waifuPics (endpoint: NSFW, options: { nsfw: true, many: true, exclude?: string[] }): Promise<string[]>
function waifuPics (endpoint: NSFW, options: { nsfw: true }): Promise<string>
function waifuPics (endpoint: SFW, options: { many: true, exclude?: string[] }): Promise<string[]>
function waifuPics (endpoint: SFW): Promise<string>
async function waifuPics (endpoint: Endpoints, options?: { nsfw?: boolean, many?: boolean, exclude?: string[] }): Promise<string | string[]> {
  if (options == null) options = {}

  const isMany = options.many === true
  const many = isMany ? "/many" : ""
  const rating = (options.nsfw === true) ? "nsfw" : "sfw"

  const res = await fetch(`${base}${many}/${rating}/${endpoint}`, {
    headers: { "Content-type": "application/json" },
    method: isMany ? "POST" : "GET",
    body: isMany ? JSON.stringify({ exclude: options.exclude ?? [] }) : undefined
  })

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)

  const json = await res.json()

  return "files" in json
    ? json.files
    : json.url
}

export default waifuPics
