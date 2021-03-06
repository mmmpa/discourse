const TITLE_SUBS = {
  all: 'all_time',
  yearly: 'this_year',
  monthly: 'this_month',
  daily: 'today',
};

export default Ember.Handlebars.makeBoundHelper(function (period, options) {
  const title = I18n.t('filters.top.' + (TITLE_SUBS[period] || 'this_week'));
  if (options.hash.showDateRange) {
    var dateString = "";
    switch(period) {
      case 'yearly':
        dateString = moment().subtract(1, 'year').format(I18n.t('dates.long_with_year_no_time')) + " - " + moment().format(I18n.t('dates.long_with_year_no_time'));
        break;
      case 'weekly':
        dateString = moment().subtract(1, 'week').format(I18n.t('dates.long_no_year_no_time')) + " - " + moment().format(I18n.t('dates.long_no_year_no_time'));
        break;
      case 'monthly':
        dateString = moment().subtract(1, 'month').format(I18n.t('dates.long_no_year_no_time')) + " - " + moment().format(I18n.t('dates.long_no_year_no_time'));
        break;
      case 'daily':
        dateString = moment().format(I18n.t('dates.full_no_year_no_time'));
        break;
    }
    return new Handlebars.SafeString(title + " <span class='top-date-string'>" + dateString + "</span>");
  } else {
    return new Handlebars.SafeString(title);
  }
});
