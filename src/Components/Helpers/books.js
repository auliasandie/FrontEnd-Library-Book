const books =  [ 
    {   id_book: "1",
        title : 'The Hunger Games',
        author : 'Suzanne Collins',
        description : "The Hunger Games is a 2012 American dystopian science fiction-adventure film directed by Gary Ross and based on Suzanne Collins’s 2008 novel of the same name. It is the first installment in The Hunger Games film series and was produced by Nina Jacobson and Jon Kilik, with a screenplay by Ross, Collins, and Billy Ray. The film stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Lenny Kravitz, Stanley Tucci, and Donald Sutherland.",
        image_url : "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
        genre : "Action",
        book_year : "2012",
        book_status : "Available"
    },
    {   
        id_book : "2",
        title : 'Origin',
        author : 'Dan Brown',
        description : "Edmond Kirsch, a billionaire philanthropist, computer scientist and futurist, as well as a strident atheist, attends a meeting in Catalonia with Roman Catholic Bishop Antonio Valdespino, Jewish Rabbi Yehuda Köves, and Muslim Imam Syed al-Fadl, three members of the Parliament of the World's Religions. He informs them that he has made a revolutionary discovery that he plans to release to the public in a month. He has chosen to inform them before the masses out of supposed respect, despite his well-known hatred of organized religion which he blames for his mother's death. Horrified, the three learn that he is presenting it in three days' time, prompting Valdespino to send him a voicemail demanding that he stop or risk being discredited.",
        image_url :"https://cdn.waterstones.com/bookjackets/large/9780/5521/9780552174169.jpg",
        genre : "Fiction",
        book_year : "2014",
        book_status : "Not Available"
    },
    {
        id_book : "3",
        title :'Sold',
        author : 'Patricia McCormick',
        description : "Lakshmi is a thirteen-year-old girl living with her family in a small hut in the mountains of Nepal. Her family is desperately poor, but her life is full of simple pleasures, like raising her black-and-white speckled goat, and having her mother brush her hair by the light of an oil lamp. But now the harsh Himalayan monsoons wash away all that remains of the family's crops, Lakshmi's stepfather says she must leave home and take a job to support her family. He introduces her to a charming stranger who tells her she will find her a job as a maid working for a wealthy woman in the city. Glad to be able to help, Lakshmi undertakes the long journey to India and arrives at “Happiness House” full of hope. But she soon learns the horrible truth: she has been sold into prostitution.",
        image_url :"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Sold_%28novel%29.jpg/220px-Sold_%28novel%29.jpg",
        genre : "History",
        book_year : "2018",
        book_status : "Available"
    },
    {
        id_book : "4",
        title :"Dead Beautiful",
        author :"Yvonne Woon",
        description :"Dead Beautiful introduces Renée Winters, a thoughtful and alluring girl from California with a largely soft-spoken demeanor. On her sixteenth birthday, she finds the deceased bodies of her parents in a forest. Both are discovered with gauze in their mouths after apparently suffering heart attacks. Soon afterward, Renée's grandfather who left contact to the family after a dispute sends her to a seemingly gothic boarding school called Gottfried Academy in Maine. Upon arrival, she befriends a girl named Eleanor, and becomes romantically linked to a mysterious boy named Dante. It soon becomes apparent that Renée is somehow able to detect dead bodies, while other paranormal enigmas surround her and Dante as well. After learning of a death similar to those of her parents, and finding that other students have gone missing, Renée begins to investigate a supernatural mystery.",
        image_url :"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Dead_Beautiful_Woon.jpg/220px-Dead_Beautiful_Woon.jpg",
        genre : "Fiction",
        book_year : "2013",
        book_status : "Not Available"
    },
    {
        id_books : "5",
        title : "Forget Me Not, Stranger",
        author :"Novoneel Chakraborty",
        description :"This book has an element of stream of consciousness and some tacts of epistolar novel has been used. The author has delineated the incidents perfectly. This book has a tragedy followed by answers to the hidden questions. The style of writing is simple, clear and lucid. Some of the sentences are just so beautiful that you end up noting down in your diary. The descriptions are fantastic and they just make you more glued to the book. Novoneel has a unique style of writing as he ends up playing with the minds of the readers through his play of words. Once can picturise the whole book while reading it and its an easy read.",
        image_url :"https://images-na.ssl-images-amazon.com/images/I/51lehZtnmOL._AC_UL320_SR210,320_.jpg",
        genre : "Thriller",
        book_year : "2011",
        book_status : "Available"
    },
    {
        id_book : "6",
        title :"One of Us Is Lying",
        author :"Karen M. McManus",
        description :"One of Us Is Lying is an award-winning contemporary, young adult, mystery/suspense novel by author Karen M. McManus. The book is her debut novel, originally published in the US by Delacorte Press, an imprint of Penguin Random House, on the 30th May, 2017. The book uses multiperspectivity to show the points-of-view of all four student suspects. It has received several accolades including a 79-week run on the New York Times best-seller list",
        image_url :"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/One_of_Us_is_Lying_book_cover.jpg/220px-One_of_Us_is_Lying_book_cover.jpg",
        genre : "Fiction",
        book_year : "2015",
        book_status : "Available"
    },
    {
        id_book : "7",
        title :"To The Boys I've Loved Before",
        author :"Jenny Han",
        description :"To All the Boys I've Loved Before is a 2014 young adult romance novel by American author Jenny Han, first published by Simon & Schuster and released on April 15, 2014. Han was inspired to write the book based on her own habit of writing long letters to boys she had crushes on as a teenager. The novel was followed by two sequels, P.S. I Still Love You, released on May 26, 2015, and Always and Forever, Lara Jean, released on May 2, 2017.",
        image_url :"https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/To_All_the_Boys_I%27ve_Loved_Before_cover.jpg/220px-To_All_the_Boys_I%27ve_Loved_Before_cover.jpg",
        genre: "Romance",
        book_year : "2016",
        book_status : "Not Available"
    },
    {
        id_book : "8",
        title :"The Fault in Our Stars",
        author :"John Green",
        description :"The Fault in Our Stars, published in January 2012, is the sixth novel by author John Green. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents to attend a support group where she subsequently meets and falls in love with 17-year-old Augustus Waters, an ex-basketball player and amputee. A feature film adaptation of the novel directed by Josh Boone and starring Shailene Woodley, Ansel Elgort and Nat Wolff was released on June 6, 2014.[1] Both the book and its film adaptation were met with strong critical and commercial success.",
        image_url :"https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Fault_in_Our_Stars.jpg/200px-The_Fault_in_Our_Stars.jpg",
        genre: "Romance",
        book_year : "2016",
        book_status : "Available"
    }
    ];

module.exports = books;