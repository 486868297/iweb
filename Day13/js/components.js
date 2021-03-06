/*响应式导航条：点击汉堡包按钮时导航菜单从左侧进入 反之点击关闭按钮导航隐藏在左侧*/
document.querySelector('[data-toggle="nav"]').onclick=function(){
	document.querySelector('[data-target="nav"]').classList.add('active')
}

document.querySelector('[data-click="nav"]').onclick=function(){
	document.querySelector('[data-target="nav"]').classList.remove('active')
}
let currentCarousel=0    //当前正在显示哪个广告
let totalCarousel=4      //轮播广告的总数
//点击“下一张”按钮，自动切换到广告中的下一张
document.querySelector('[data-carousel="next"]').onclick=function(){
	currentCarousel++
	if(currentCarousel>=totalCarousel){
		currentCarousel=0   //如果已经切换到最后一张之后，必须重回到0
	}
	//显示新的轮播广告项，
		 //首先隐藏当前显示的广告项——删除active类
		 document.querySelector('.carousel>.items>li.active').classList.remove('active')
		 //然后再让目标广告项显示出来——li添加active类
		 let list = document.querySelectorAll('.carousel>.items>li')
		 list[currentCarousel].classList.add('active')
		 document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
		 //然后再让目标广告项显示出来——li添加active类
		 list=document.querySelectorAll('.carousel>.indicators>li')
		 list[currentCarousel].classList.add('active')
}

document.querySelector('[data-carousel="prev"]').onclick=function(){
	currentCarousel--
	if(currentCarousel<0){
		currentCarousel=totalCarousel-1   //如果已经切换到最后一张之后，必须重回到3
	}
	//显示新的轮播广告项，
		 //首先隐藏当前显示的广告项——删除active类
		 document.querySelector('.carousel>.items>li.active').classList.remove('active')
		 //然后再让目标广告项显示出来——li添加active类
		 let list = document.querySelectorAll('.carousel>.items>li')
		 list[currentCarousel].classList.add('active')
		 
		 document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
	     list=document.querySelectorAll('.carousel>.indicators>li')
		 list[currentCarousel].classList.add('active')
}
  
//点击四个“轮播指示器（小圆饼）”时，切换到对应的广告项
 let indicatorlist= document.querySelectorAll('[data-carousel-to]')
 // console.log(indicatorlist)	//类数组对象
 //循环遍历数组中的每一个元素
indicatorlist.forEach(function(e,i){
	// console.log(e,i) //e就是每个li,i是li的下标
	e.onclick=function(){
		//切换要显示的广告项
		document.querySelector('.carousel>.items>li.active').classList.remove('active')
		//提示：CSS中nth-child()下标从1开始而不是0
		document.querySelector('.carousel>.items>li:nth-child('+(i+1)+')').classList.add('active')
	
		//切换广告指示器的敲活项
		document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
				//提示：CSS中nth-child()下标从1开始而不是0
		document.querySelector('.carousel>.indicators>li:nth-child('+(i+1)+')').classList.add('active')
			
	}
})




//让轮播广告每隔3s自动切换下一张
let timer=setInterval(function(){
	currentCarousel++
	if(currentCarousel>=totalCarousel){
		currentCarousel=0
	}
	document.querySelector('.carousel>.items>li.active').classList.remove('active')
	//提示：CSS中nth-child()下标从1开始而不是0
	document.querySelector('.carousel>.items>li:nth-child('+(currentCarousel+1)+')').classList.add('active')
	
	//切换广告指示器的敲活项
	document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
			//提示：CSS中nth-child()下标从1开始而不是0
	document.querySelector('.carousel>.indicators>li:nth-child('+(currentCarousel+1)+')').classList.add('active')
	
},3000)
// for (let i=0;i<10;i++){
	
// }
// console.log(i)                    nnc