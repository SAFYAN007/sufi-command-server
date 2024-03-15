import { addCommand } from '../commands.js';


addCommand("testSwal", function ({reOpenMain}) {
    let url =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        window.location.href;
    Swal.fire({
        html: `<iframe class="sufi-frame" src="${url}" />`,
        didDestroy: reOpenMain,
    });
});

addCommand("Website Qr", function ({reOpenMain}) {
    let url =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        window.location.href;
    Swal.fire({
        html: `<iframe class="sufi-frame" src="${url}" />`,
        // didDestroy: reOpenMain,
    });
});

addCommand("FindEmail", function ({reOpenMain}) {
    function scrapeEmails() {
        let pageContent = document.body.innerHTML;
        let emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/gi;
        let emails = pageContent.match(emailPattern);
        Swal.fire({
            html: `<textarea>${emails.join("\n")}</textarea>`,
            // didDestroy: reOpenMain
        });
    }
    scrapeEmails();
});
addCommand("FinedPhoneNumber", function ({reOpenMain}) {
    function FindPhoneNumberCommand() {
        var phoneNumberPattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;

        var pageContent = document.body.innerHTML;

        var phoneNumbers = pageContent.match(phoneNumberPattern);
        Swal.fire({
            html: `<textarea>${phoneNumbers.join("\n")}</textarea>`,
            // didDestroy: reOpenMain
        });
    }
    FindPhoneNumberCommand();
});

addCommand("ShortURL", function ({reOpenMain}) {
    function ShortURLCommand() {
        var shortURLPattern = /https?:\/\/[^\s]+/gi;
        var pageContent = document.body.innerHTML;
        var shortURLs = pageContent.match(shortURLPattern);
        Swal.fire({
            html: `<textarea>${shortURLs.join("\n")}</textarea>`,
            // didDestroy: reOpenMain
        });
    }
    ShortURLCommand();
});
addCommand("SpellChEker", function ({reOpenMain}) {
    function SpellCheckerCommand() {
        var corrections = {
            spel: "spell",
            documnt: "document",
            contnt: "content",
        };

        var content = document.body.innerText;

        var words = content.split(/\s+/);

        words.forEach(function (word, index) {
            if (corrections.hasOwnProperty(word.toLowerCase())) {
                words[index] = corrections[word.toLowerCase()];
            }
        });

        var correctedContent = words.join(" ");

        Swal.fire({
            title: "Spell Checker",
            html:
                '<textarea id="spellCheckerTextarea">' +
                correctedContent +
                "</textarea>",
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
            preConfirm: () => {
                return document.getElementById("spellCheckerTextarea").value;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                document.body.innerText = result.value;
                Swal.fire("Saved!", "", "success");
            }
        });
    }

    SpellCheckerCommand();
});

addCommand("SSandPDfCovert", function ({reOpenMain}) {
    function SSandPDfCovert() {
        document.addEventListener("DOMContentLoaded", function () {
            var modalLinks = document.querySelectorAll(".modal-link");
            var modal = document.getElementById("myModal");
            var modalImg = document.getElementById("modal-image");
            var closeButton = document.getElementsByClassName("close")[0];
            if (modal && modalImg && closeButton) {
                modalLinks.forEach(function (link) {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Prevent default action
                        var imageSource = this.getAttribute("data-image");
                        modalImg.src = imageSource;
                        modal.style.display = "block";
                    });
                });
                closeButton.onclick = function () {
                    modal.style.display = "none";
                };
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
                function downloadPDF() {
                    var pdfUrl = "path/to/your/pdf/file.pdf";
                    var link = document.createElement("a");
                    link.href = pdfUrl;
                    link.setAttribute("download", "");
                    link.style.display = "none";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                document
                    .getElementById("downloadButton")
                    .addEventListener("click", downloadPDF);
            }
        });
    }

    SSandPDfCovert();
});
addCommand("FontFamily", function ({reOpenMain}) { });
addCommand("CheckBrokenLinks", function ({reOpenMain}) { });
addCommand("CollectLinks", function ({reOpenMain}) { });

addCommand("Metatags", function ({reOpenMain}) {
    function metaTagsCommand() {
        let metaTags = document.querySelectorAll("meta");

        let metaTagInfo = [];

        metaTags.forEach(function (tag) {
            let tagInfo = {};
            tagInfo.name = tag.getAttribute("name");
            tagInfo.content = tag.getAttribute("content");
            metaTagInfo.push(tagInfo);
        });

        if (metaTagInfo.length > 0) {
            console.log("Meta tags found:");
            console.log(metaTagInfo);
        } else {
            console.log("No meta tags found on this page.");
        }
    }

    addCommand("Metatags", metaTagsCommand);
});
addCommand("Check seo site:", function ({reOpenMain}) {
    window.open("https://www.google.com/search?q=site:" + window.location.href);
});
addCommand("Way back", function ({reOpenMain}) {
    window.open("https://web.archive.org/web/*/" + window.location.href);
});