



// In this function every menu which has an active link opens if a link is active. Its ul parent opens itself and adds the class 'open' to its parent (the arrow) so it turns 90 degrees
$('.pagenav li').each(function(i, el) {
  if ($(el).hasClass('current_page_item')) {
    $(el).parent().show().parent().addClass('open');
  };
});

// This function ensures that a menu pops open when you click on it. All other menu's automatically close if the user clicks on a ul header. All the opened ul's close except the one clicked on
$('.accordion h4').click(function(event) {
  $('.accordion > ul > li > ul:visible').not($(this).nextAll('ul')).stop().hide(200).parent().removeClass('open'); //
  $(this).nextAll('ul').slideToggle(200, function() {
    $(this).parent('.pagenav').toggleClass('open');
  });
});







$(document).ready(function(){




  var down = false;
  
  $('#bell').click(function(e){
  
  var color = $(this).text();
  if(down){
  
  $('#box').css('height','0px');
  $('#box').css('opacity','0');
  down = false;
  }else{
  
  $('#box').css('height','auto');
  $('#box').css('opacity','1');
  down = true;
  
  }
  
  });
  
  });
















function sortTableFromHeader(n, s) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(s);
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}





//SEARCH FUNCTION 



function search(s,n) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById(s);
  filter = input.value.toUpperCase();
  table = document.getElementById(n);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}






// CHART FUNCTION

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
    labels: ['User 1', 'User 2', 'User 3' , 'User 4' , 'User 5' , 'User 6' , 'User 7' , 'User 8'],
    datasets: [{
      label: 'Pending',
      data: [10, 7, 12 , 11 ,11,11,4,15],
      backgroundColor: '#50C878'
      

   }, {
      label: 'OnGoing',
      data: [12, 11, 13,16,,16,16,19,17],
      backgroundColor: '#FBB13C'
   }, {
      label: 'Completed',
      data: [9,7,8,8,9,8,9,12],
      backgroundColor: '#D22B2B'
   },
 
 ],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true, // this also..
        gridLines: {
          display: false,
        }
     }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'right' },
	}
});















// FUNCTION TO SHOW DATA BY CLICKING ON ANY ELEMENT OF FIRST TABLE


 function show(nr){
  let schools=[];
  
  // const getData = () => {
     axios.get('https://reqres.in/api/users?page=2').then(response => {
      // console.log(response);


     

      response.data.data.map((dummy , index) => {
         if (nr==1) {
           if (index <2)
        {
      
          schools.push ({
          name : dummy.first_name,
          last_name: dummy.last_name,
          email: dummy.email,
           
          },
          
          );
        }

      }




     else if (nr==2) {
        if (index >=2)
     {
   
       schools.push ({
       name : dummy.first_name,
       last_name: dummy.last_name,
       email: dummy.email,
        
       },
       
       );
     }

   }


});

     
     


      str = `<table id="dummy_data1" class=" table table-hover table-striped table-bordered results" cellspacing="1" width="100%">
      <thead>  
       <tr>  
           <th onclick='sortTableFromHeader(0, "dummy_data1")'> First Name</th>  
           <th onclick='sortTableFromHeader(1, "dummy_data1")'> Last Name </th>  
           <th onclick='sortTableFromHeader(2, "dummy_data1")'> Email </th>
            
       </tr>  
    </thead>
    <tbody>`
    

      
       schools.map(item => {
         
                 str += `
                  <tr>
                       <td>${item.name}</td>
                       <td>${item.last_name}</td>
                       <td>${item.email}</td>
                       
                     </tr>
                    `;
       
         
       });
       str +=  `</tbody></table>`
       
       
       
       document.getElementById('dummy_data').innerHTML = str;

    });
  

  /*
  if (nr==1)
  {

   

     schools = [{
      name : data.data.first_name,
     username: 'riz123',
     email: 'ali@gmail.com',
     store: 'mega'
    },
    {
      name: 'saad',
     username: 'sid123',
     email: 'saad@gmail.com',
     store: 'makkah'
    },
    {
      name: 'zahid',
     username: 'z123',
     email: 'zahid@yahoo.com',
     store: 'mega'
    }
    ];
  }

else if (nr == 2)
{

  schools = [{
    name: 'Zain hassan',
   username: 'zee',
   email: 'Z@gmail.com',
   store: 'Punjab'
  },
  {
    name: 'zulfiqar',
   username: 'zulf123',
   email: 'zulf@gmail.com',
   store: 'madina'
  },
  {
    name: 'noman',
   username: 'nomi786',
   email: 'nomi@gmail.com',
   store: 'mega'
  }];
  }


  else if (nr==3)
  {
     schools = [{
      name: 'Baaqir',
     username: 'alien123',
     email: 'baaqir@gmail.com',
     store: 'Fateh'
    },
    {
      name: 'salman',
     username: 'salman_123',
     email: 'salman@gmail.com',
     store: 'mega'
    },
    {
      name: 'hina zahid',
     username: 'hina123',
     email: 'hina@email.com',
     store: 'mega'
    }
    ];}

    else if (nr==4)
  {
     schools = [{
      name: 'fatehi',
     username: 'fati123',
     email: 'fati123@gmail.com',
     store: 'punjab'
    },
    {
      name: 'iqbal',
     username: 'iqbal_10',
     email: 'iqbal@yahoo.com',
     store: 'mega'
    },
    {
      name: 'nasir',
     username: 'Nasir123',
     email: 'nasir@gmail.com',
     store: 'mega'
    }
    ];}


    else if (nr==5)
  {
     schools = [{
      name: 'faizan',
     username: 'faizi_123',
     email: 'faizan@gmail.com',
     store: 'packages'
    },
    {
      name: 'shahid',
     username: 'shah_123',
     email: 'shah@gmail.com',
     store: 'mega'
    }
    ];}

    else if (nr==6)
  {
     schools = [{
      name: 'nadeem',
     username: 'nadeem_123',
     email: 'nadeem@gmail.com',
     store: 'Fateh'
    },
    {
      name: 'rafay zahid',
     username: 'rafay123',
     email: 'rafay@gmail.com',
     store: 'fateh'
    },
    {
      name: 'shaleem',
     username: 'shaleem_123',
     email: 'shah@gmail.com',
     store: 'mega'
    }
    ];}*/


  

  







  
  

  }




























