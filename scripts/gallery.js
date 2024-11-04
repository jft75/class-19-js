$("buttonB").on("click", function () {
    $("itemA").addClass("hidden");
    $("itemB").removeClass("hidden");
    $("itemC").addClass("hidden");

    $("buttonA").removeClass("active-thumbnail");
    $("buttonB").addClass("active-thumbnail");
    $("buttonC").removeClass("active-thumbnail");
})
