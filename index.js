function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(function() {
      const score = {red: 0, blue: 0, green: 0, yellow: 0};
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    console.log("Starting 100M race...");
    setTimeout(function() {
      const times = {red: Math.floor(Math.random() * 6) + 10, blue: Math.floor(Math.random() * 6) + 10, green: Math.floor(Math.random() * 6) + 10, yellow: Math.floor(Math.random() * 6) + 10};
      const sortedTimes = Object.keys(times).sort(function(a, b) {
        return times[a] - times[b];
      });
      score[sortedTimes[0]] += 50;
      score[sortedTimes[1]] += 25;
      console.log("Race finished. Scores:", score);
      callback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    console.log("Starting long jump...");
    setTimeout(function() {
      const winner = Object.keys(score)[Math.floor(Math.random() * 4)];
      score[winner] += 150;
      console.log("Long jump finished. Scores:", score);
      callback(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    console.log("Starting high jump...");
    const winner = prompt("Which colour secured the highest jump? (Red/Yellow/Green/Blue)");
    if (winner && winner.toLowerCase() in score) {
      score[winner.toLowerCase()] += 100;
      console.log("High jump finished. Scores:", score);
      callback(score, AwardCeremony);
    } else {
      console.log("Event was cancelled.");
      AwardCeremony(score);
    }
  }
  
  function AwardCeremony(score) {
    console.log("Award ceremony:");
    const sortedScores = Object.keys(score).sort(function(a, b) {
      return score[b] - score[a];
    });
    console.log("1st place:", sortedScores[0], "with", score[sortedScores[0]], "points");
    console.log("2nd place:", sortedScores[1], "with", score[sortedScores[1]], "points");
    console.log("3rd place:", sortedScores[2], "with", score[sortedScores[2]], "points");
  }

  function main() {
    OpeningCeremony(LongJump);
  }


  
  