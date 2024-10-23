document.getElementById('emailForm').addEventListener("submit",
    function(event) {
        event.preventDefault();

        const to = document.getElementById("to").value;
        const subject = document.getElementById("subject").value;
        const body = document.getElementById("body").value;

        const mailtolink = `mailto:${to}?subject=
        ${encodeURIComponent(subject)}
        &body=${encodeURIComponent(body)}
        `

        window.location.href = mailtolink;

    }
)