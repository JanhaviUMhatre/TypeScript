class Deckofcards
{
    cards()
    {
       var suits:any [];
       suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
       var rank:any [];
       rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

       var card_list: any;
       card_list=[]
       
       var d: number = card_list.length
    
       while (d < 36)
       {
        var i:number; 
        for(i=0;i<=8;i++)
        {
            var rand_suits = Math.floor(Math.random() * 3) + 0;  // random numbers between 0 to 3 
            var rand_rank = Math.floor(Math.random() * 12) + 0;  // random numbers between 0 to 3
            var rank_val = rank[rand_rank];
            
            var suit_val = suits[rand_suits];
            rank_val = rank_val + "-" + suit_val;
            //console.log(rank_val);
            //for(rank_val ! in card_list)
            //{
                    if(d!=36)
                    {
                        card_list.push(rank_val);
                        
                    }
                  
                //}
                
            }
            
            
            break;
        }
        
        console.log(card_list);
        
       }
        

}
var object = new Deckofcards();
object.cards();
