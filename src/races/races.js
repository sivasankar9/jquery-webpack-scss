import "../styles/main.scss";
import $ from "jquery";
import { ajaxGet, getImageTag } from "../utils/config";

(function ($) {
  function addRunnerResultToTable(position, runnerName, finalTime,image_url) {
    $("#results").append(
      "<tr><td>" +
        position +
        "</td><td>" +
        runnerName +
        "</td><td>" +
        finalTime +
       "<td> </td>"+getImageTag(image_url)+
        "</td>"
    );
    $("Images".append(getImageTag(image_url)))
  }

  window.onload = function () {
    ajaxGet(
      "beers?page=1&per_page=1",
      "GET",
      null
    ).done((data) => {
      data.forEach((r) =>
        addRunnerResultToTable(r.id, r.tagline, r.description, r.image_url)
      );
    });
  };
})($);
