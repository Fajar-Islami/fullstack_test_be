export default Object.freeze({
  SYS_DATE: 'yyyy-MM-dd',
  SYS_DATE_TIME: 'yyyy-MM-dd HH:mm:ss',
  HUMAN_DATE: 'dd MMMM yyyy',
  HUMAN_DATE_TIME: 'dd MMMM yyyy, HH:mm:ss',
  TIMESTAMP_TIME: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  DATE_PATTERN: 'dd/MM/yyyy',

  STATUS: {
    HTTP: {
      UNAUTHORIZED: '401',
    },
    API: {
      DEFAULT_SUCCESS: '00',
      DEFAULT_NOT_FOUND: '01',
      UNAUTHORIZED: '03',
    },
  },
  phoneRegExp:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
});
