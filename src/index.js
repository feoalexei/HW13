/*---------------- Tooltip ---------------------------*/
$('.tooltip').mouseover(function() {
    const $dataTooltip = $(this).attr('data-tooltip');
    const $span = `<span class="tooltip-content">${$dataTooltip}</span>`;
    $(this).append($span);

});
$('.tooltip').mouseout(function() {
    $(this).find('span').remove();
});

// /*---------------- Accordion ---------------------------*/
$('.title').click(function() {
    $(this).toggleClass('active-accord');
});

// /*------------------ Tabs -----------------------------*/
$('[data-target]').click(function() {
    $('[data-target]').removeClass('active-tab');
    $(this).addClass('active-tab');

    const currentTab = $(this).attr('data-target');

    $('.tab').attr('hidden', true);
    $(currentTab).removeAttr('hidden');

    location.hash = currentTab;
});

const currentHash = window.location.hash;

if (currentHash) {
    $('[data-target]').removeClass('active-tab');
    $('.tab').attr('hidden', true);

    $(`[data-target = "${currentHash}"]`).addClass('active-tab');
    $(currentHash).removeAttr('hidden');
}
