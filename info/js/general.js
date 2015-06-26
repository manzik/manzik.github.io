function onload()
{
    var l = document.getElementById("m_img");
    try
    {
        l.style.height = String(innerHeight / 9) + "px";
        l.style.width = String(parseFloat(l.style.height) * 5.3) + "px";
        l.style.top = String(innerHeight / 4.9 - parseFloat(l.style.height) / 2) + "px";
        l.style.left = String(innerWidth / 2 - parseFloat(l.style.width) / 2) + "px";
    }
    catch (j) { }
    //var l = document.getElementById("dn");
    //l.style.height = String(innerHeight / 9) + "px";
    //l.style.width = String(parseFloat(l.style.height) * 5.3) + "px";
    //l.style.top = String(innerHeight / 1.2 - parseFloat(l.style.height) / 2) + "px";
    //l.style.left = String(innerWidth / 2 - parseFloat(l.style.width) / 2) + "px";
    ore();
    var l = document.getElementsByClassName("ci");
    for (var i = 0; i < l.length; i++)
    {
        l[i].style.fontSize = String(innerWidth / 25) + "px";
    }
    m = document.getElementById("m_img");
}
t = 0; db = 0; m = document.getElementById("m_img"); d = 0; ss = ["stop clicking", "don't", "don't click", "stop clicking", "don't do that"];
function ore()
{
    var l = document.getElementById("ci");
    l.style.fontSize = innerWidth / 18 + "px";
    document.getElementById("mi").style.fontSize = innerWidth / 11 + "px";
}
function m_oc()
{
    l = document.getElementById("m_img");
    t++;
    if ((Math.floor(Math.random() * 100) % 1 == 0 && t > 2))
    {
        m_oc_drop();
        m.onclick = "";
        return;
    }
    m_oc_rot();
    switch (Math.floor(Math.random() * 100) % 7)
    {
        case 0:
            alert(ss[Math.floor(Math.random() * 10) % ss.length]);
            break;
        case 1:
            alert("Please " + ss[Math.floor(Math.random() * 10) % ss.length]);
            break;
    }
}
function m_oc_drop()
{
    m.style.transition = "0.25s";
    gg = 90 + Math.floor(Math.random() * 50);
    m.style.webkitTransform = "rotate(" + String(gg) + "deg)";
    m.style.MozTransform = "rotate(" + String(gg) + "deg)";
    m.style.msTransform = "rotate(" + String(gg) + "deg)";
    m.style.OTransform = "rotate(" + String(gg) + "deg)";
    m.style.transform = "rotate(" + String(gg) + "deg)";
    setTimeout(function () { m.style.top = String(innerHeight + 900) + "px"; m.style.transition = "0.25s linear"; setTimeout(function () { document.getElementById("m_img").parentNode.removeChild(document.getElementById("m_img")); }, 250); }, 250);
}
function m_oc_rot()
{
    d = d + t * (Math.floor(Math.random() * 100) % 1.2 + 5);
    m.style.webkitTransform = "rotate(" + String(d) + "deg)";
    m.style.MozTransform = "rotate(" + String(d) + "deg)";
    m.style.msTransform = "rotate(" + String(d) + "deg)";
    m.style.OTransform = "rotate(" + String(d) + "deg)";
    m.style.transform = "rotate(" + String(d) + "deg)";
}
var q;
var r;
if (innerHeight > innerWidth)
    r = 0;
else
    r = 1;

setInterval(function ()
{
    if (innerHeight > innerWidth)
        q = 0;
    else
        q = 1;
    if (q != r)
    {
        r = q;
        onload();
    }
}, 500);