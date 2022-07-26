import "../styles/main.scss";
import $ from "jquery";
import { ajaxGet, getImageTag } from "../utils/config";

(function ($) {
  function addRunnerResultToTable(position, runnerName, finalTime, image_url) {
    $("#results")
      .append(
        `<span class="col">${position}</span>
        <span >${runnerName}</span>
        <span class="descrption">${finalTime}</span>
      
      `
      )
      .append(getImageTag(image_url));
  }

  window.onload = function () {
    // ajaxGet("beers?page=1&per_page=8", "GET", null).done((data) => {
    //   data.forEach((r) =>
    //     addRunnerResultToTable(r.id, r.tagline, r.description, r.image_url)
    //   );
    // });
  };
})($);
