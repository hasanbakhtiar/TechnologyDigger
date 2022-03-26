// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var - variable (global)

// const - constant  (local)
// let (local)

// global

// if (true) {
//   //local global

//   if (true) {
//     //local global



//     if (true) {
//       let a = 5;
//       //  local
//       console.log(a);
//     }


// }
// }



// if - əgər
// else if - deyilsə əgər
// else - deyilsə

// if (5<1) {
//     console.log("5 kichikdir 10dan");
// }else if( 5< 4){
//     console.log("5 boyukdur 4den");
// }else{
//     console.log('bir duz soz yazmadin');
// }

// const myTime  = 9;

// if ((myTime >= 5) && (myTime < 13)) {
//     console.log('Good Morning');
//     if (myTime == 7) {
//         console.log("Get up");
//     }else if(myTime == 9){
//         console.log('have a breakfast');
//     }
// }else if((myTime >= 13) && (myTime < 19)){
//         console.log("Good Afternoon");
// }else if((myTime >= 19) && (myTime < 22)){
//     console.log("Good Evening");
// }else if(myTime <= 23){
//     console.log("Good night");
// }else{
//     console.log("no time");
// }


// const info = "Hello";
// const b = 5;

// switch(info){
//     case "Hello":
//         console.log(5);
//         const a = 5;
//         switch (a) {
//             case 10-b:
//                 console.log("new");
//                 break;
        
//             default:
//                 break;
//         }
//     break;
//     case 10:
//         console.log(10);    
//     break;  
//     default:
//         console.log("something wrong");  

// }



try{
    throw ""
    consoale.log("Hello");
}catch(err){
    console.log(err);
    // console.log("Texniki xeta var");
}finally{
    console.log("men hemise isleyirem");
}