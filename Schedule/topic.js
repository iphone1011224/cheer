var topic = [
    "開學週",
    "新生體驗",
    "基礎訓練",
    "選擇位置",
    "準備比賽",
    "能力提升"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay)

{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(9,11);