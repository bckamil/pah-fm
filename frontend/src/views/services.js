const requiredFields = [
  'date',
  'car',
  'description',
  'from',
  'destination',
  'startMileage',
  'endMileage',
];

const stringFields = requiredFields;

const isErroring = route => key =>
  requiredFields.includes(key) && !route[key].trim();

const splitCamelCase = fieldName => fieldName.replace(/([A-Z])/g, ' $1');

const makeErrorMessage = t => field =>
  t('routes.validation_error', { field: splitCamelCase(field) });

const makeErrors = t => (acc, field) => ({
  ...acc,
  [field]: makeErrorMessage(t)(field),
});

export { isErroring, makeErrorMessage, makeErrors, stringFields };
