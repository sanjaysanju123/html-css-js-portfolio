function toggleMenu()
{
    const menu=document.querySelecton(".menu-links");
    const icon=document.querySelecton(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}