const superagent = require('superagent');
const http = require('http');
const cheerio = require('cheerio');

// const targetUrl = "https://movie.douban.com/top250";

// superagent.get(targetUrl).end(function (err,res) {
//     if(err){
//         console.log(err);
//      }
//      let $  = cheerio.load(res.text);
//      let selectItem=$('#content .grid_view .item');
//      console.log(selectItem.length)
//      for (let i = 0; i < selectItem.length; i++) {
//         let oneItem = selectItem[i];
//         let oneItemData={
//             imgUrl:$(oneItem).find('.pic img').attr('src'),
//             type:$(oneItem).find('.info a .title').text().replace(/(^\s*)|(\s*$)/g, ""),
//             text:$(oneItem).find('.info .bd p').text().replace(/(^\s*)|(\s*$)/g, "")
//         }
//         console.log(oneItemData); 
//      }
    
// })

const targetUrl = "https://www.80ying.com/movie/list/----g";

superagent.get(targetUrl).end(function (err,res) {
    if(err){
        console.log(err);
        console.log('检查网络连接')
        return false;
     }
     let $  = cheerio.load(res.text);
     let selectItem=$('#block3 .clearfix .me1 li');
     console.log(selectItem.length)
     for (let i = 0; i < selectItem.length; i++) {
        let oneItem = selectItem[i];
        let oneItemData={
            imgUrl:$(oneItem).find('a img').attr('src'),
            title:$(oneItem).find('.h3 a').text().replace(/(^\s*)|(\s*$)/g, ""),
            score:$(oneItem).find('a .poster_score').text().replace(/(^\s*)|(\s*$)/g, ""),
            desc:$(oneItem).find('.tip').text().replace(/(^\s*)|(\s*$)/g, "")
        }
        console.log(oneItemData); 
     }
    
})