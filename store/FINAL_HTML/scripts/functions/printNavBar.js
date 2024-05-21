export function printNavBar(opts, id) {
    let template = "";
    for (const each of opts) {
    template =
        template +
        `
        <li class="nav-li">
        <a class="nav-a" href="${each.href}">${each.title}</a>
        </li>
    `;
    }
    const selector = document.getElementById(id);
    selector.innerHTML = template;
}