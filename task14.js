var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var GuestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
console.log("Original Invitations:");
for (var i = 0; i < GuestList.length; i++) {
    console.log("Dear ".concat(GuestList[i], ",\nYou are cordially invited to dinner.\n[Wajeeha]\n"));
}
var updatedGuestList = __spreadArray([], GuestList, true);
updatedGuestList[1] = "Nikola Tesla";
