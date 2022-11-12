export default {
  calculateExperience(startDate, stopDate) {
    var experienceTime =  (stopDate ?? new Date()) - startDate;
    let milliSecondsInAYear = 31557600000;
    let milliSecondsInAMonth = 2629800000;
    let milliSecondsInADay = 86400000;

    let years = Math.floor(experienceTime / milliSecondsInAYear);
    experienceTime -= years * milliSecondsInAYear;
    let months = Math.floor(experienceTime / milliSecondsInAMonth);
    experienceTime -= months * milliSecondsInAMonth;
    var result = "";
    if(years > 0) result += `${years} year(s)`;
    if(result.length > 0) result += ", ";
    if(months > 0) result += `${months} month(s)`;
    if(result.length == 0) {
      let days = Math.floor(experienceTime / milliSecondsInADay);
      experienceTime -= days * milliSecondsInADay;
      result += `${days} day(s)`;
    }
    return result;
  },
  calculateAge(startDate){
    var time = new Date() - startDate;
    let milliSecondsInAYear = 31557600000;
    let years = Math.floor(time / milliSecondsInAYear);
    return years;
  }
};
