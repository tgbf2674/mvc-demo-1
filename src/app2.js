import './app2.css'
import $ from 'jquery'
const $tabBar = $('#app2 .tab-bar')
const $tabContext = $('#app2 .tab-content')
$tabBar.on('click','li',e=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected')
    .siblings().removeClass('selected')
    const index = $li.index()
    console.log(index)
    $tabContext.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')