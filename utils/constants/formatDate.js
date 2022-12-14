export default function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let monthString = '';

  switch (month) {
    case 0:
      monthString = 'January';
      break;
    case 1:
      monthString = 'Febuary';
      break;
    case 2:
      monthString = 'March';
      break;
    case 3:
      monthString = 'April';
      break;
    case 4:
      monthString = 'May';
      break;
    case 5:
      monthString = 'June';
      break;
    case 6:
      monthString = 'July';
      break;
    case 7:
      monthString = 'August';
      break;
    case 8:
      monthString = 'September';
      break;
    case 9:
      monthString = 'October';
      break;
    case 10:
      monthString = 'November';
      break;
    case 11:
      monthString = 'December';
      break;

    default:
      break;
  }

  return `${monthString} ${day}, ${year}`;
}
