/* select or deselect all products in list */
function commerce_up_select_all(x) {
    (function ($) {
        if(x) {
            $('#settings_product_list_wrapper input.form-checkbox').prop('checked', true);
        } else {
            $('#settings_product_list_wrapper input.form-checkbox').prop('checked', false);
        }   
    }(jQuery));
}