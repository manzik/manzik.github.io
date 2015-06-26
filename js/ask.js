window.addEventListener("load", function ()
{
    return;
    if (localStorage)
    {
        if (!localStorage.getItem("ask1"))
        {
            al();
            localStorage.setItem("ask1", true);
        }
    }
    else
    {
        if (!window.localStorage.getItem("ask1"))
        {
            al();
            window.localStorage.setItem("ask1", true);
        }
    }

});
var a1=0;
function func()
{
    a1++;
    if(a1>2)
    {
        alertify.confirm("Are you a javascript programmer?\n(this will be asked once)").set({
            "onok": function ()
            {
                setTimeout(function ()
                {
                    alertify.confirm("I'm trying to make a group, do you want to be a part of the group?").set(
                    {
                        "onok": function ()
                        {
                            alertify.alert("You will be directed to my information page, please email me. ;)").set
                                ({
                                    "onok": function ()
                                    {
                                        window.open("http://manzik.co/#info", "_blank");
                                    }
                                });
                        }
                    });
                }, 1);
            }
        });
    }
}
function al()
{
    var st1 = document.createElement("script");
    st1.setAttribute("onload", "func()");
    st1.src = "http://manzik.co/js/alertify/alertify.min.js";
    document.head.appendChild(st1);
    var st2 = document.createElement("link");
    st2.rel = "stylesheet";
    st2.setAttribute("onload", "func()");
    st2.href = "http://manzik.co/css/alertify/alertify.min.css";
    document.head.appendChild(st2);
    var st3 = document.createElement("link");
    st3.rel = "stylesheet";
    st3.setAttribute("onload", "func()");
    st3.href = "http://manzik.co/css/alertify/themes/default.min.css";
    document.head.appendChild(st3);
    
}