export default function checkEventTargetIsOutsideContent(el, contentEl) {
    if (el === contentEl) return false;
    if (el.parentElement)
        return checkEventTargetIsOutsideContent(el.parentElement, contentEl);
    return true;
}
