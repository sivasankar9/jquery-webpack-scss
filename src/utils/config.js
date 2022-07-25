import $ from "jquery";

const path = "https://api.punkapi.com/v2/";

const ajaxGet = (url, type, data) => {
  return $.ajax({
    url: `${path}${url}`,
    type: type,
    data: {
      data,
    },
    headers: {
      _c: "abc-ddef",
    },
  });
};

const getImageTag= (e) =>{
    console.log("imagePath",e)
    var image = new Image();
    image.src = e
    return image;
}

export { ajaxGet, getImageTag };
