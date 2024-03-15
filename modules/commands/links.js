import { addCommand } from "../commands.js";

addCommand("Title", function({reOpenMain}){
    let ass = document.querySelectorAll("a");
    let assArr = Array.from(ass);
    Swal.fire({
        html: `<textarea>${assArr.map(a=>`[${a.innerText}](${a.href})`).join("\n\n")}</textarea>`
    });
});