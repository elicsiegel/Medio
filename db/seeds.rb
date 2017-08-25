# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all 

user1 = User.create!(username: "Eli", password: "password") 
user2 = User.create!(username: "Jim", password: "password") 
user3 = User.create!(username: "Davis", password: "password") 
user4 = User.create!(username: "Michelle", password: "password") 
user5 = User.create!(username: "Freddy", password: "password") 
user6 = User.create!(username: "Betty", password: "password") 
user7 = User.create!(username: "Guest", password: "password")
user8 = User.create!(username: "Gabby", password: "password")

Story.destroy_all

story1 = Story.new(title: "Our first story", body: "Once upon a time, Medio was born", author_id: user1.id)

file = File.open('app/assets/images/medio.jpg')
story1.image = file
story1.save!

story2 = Story.new(title: "Drawing the Eclipse", body: "Today I drew the eclipse for CBS News in NY City, and while not a totality zone (love that phrase, which means a place where you can experience a full eclipse. NYC was about 75%), it didn’t matter to me. I was happy to be able to cover and draw the city I love so much, to draw New Yorkers as they gathered to gaze skyward. I was stationed at the American Museum of Natural History, where they held an “event” on their Hayden Planetarium terrace (a homecoming of sorts for me: my first job in NYC was in the art department of the museum).
People were in a friendly, exited, chatty mood. I spent most of the time watching people, although I did put on my eclipse glasses three times to view the sun/moon; frankly I found the people more interesting. But the mood was unique: there were oos and aahs, and clapping at times. As I watched and drew the gathered group around me, what I felt was comaraderie, a relief to be spending time together doing something that was not about politics or feeling divided as a country. Perhaps that’s my spin. But nonetheless, it was wonderful to see such a diversity of people come out to watch the eclipse — the very young and the very old, and many, many different races.", author_id: user5.id)

file = File.open('app/assets/images/eclipse.jpg')
story2.image = file
story2.save!

story5 = Story.new(title: "Palermitano or Romano?: Problems of Chronology and Documentation", author_id: user8.id, body: "Michelangelo Merisi da Caravaggio’s Nativity with Saints Lawrence and Francis, formerly the central altarpiece of Palermo’s Oratory of San Lorenzo, was stolen on the night or early morning of October 17-18, 1969.  Thieves entered the unlocked oratory under cover of darkness and, through a combination of cutting with razors and brute force, ripped the canvas from its frame. Recently, a Mafia pentito (turncoat) testified in court that the Nativity was hidden in a shed in rural Sicily, where the painting was so severely damaged by vermin that its owners ordered its destruction.  Allegedly, the painting was burned, and it remains unlikely that the picture will be recovered through legal investigation.\n 
Regardless of the Nativity’s fate, it has become the fixation of recent scholarship on Caravaggio. There is a vigorous controversy brewing on the dating of the picture. Several scholars have proposed to re-date the Nativity to 1600 Rome, challenging the long-held consensus that Caravaggio painted the altarpiece in Palermo in 1609 on the last leg of his Sicilian sojourn. Revising the chronology of Caravaggio’s paintings, especially his late works, could potentially alter our understanding of his stylistic development. This paper, thus, will carefully consider the arguments for the Palermo Nativity’s early (1600) and late (1609) chronological assignments and, based on extant documentary, literary, and visual evidence, concludes that the Nativity was likely painted in Sicily in the summer of 1609. The Palermo Nativity shares greater formal similarities with works from Caravaggio’s second visit to Naples, circa 1609-1610, than with those, as proposed by scholars attempting to re-date the picture, of Caravaggio’s mature Roman period, circa 1600-1601. Additionally, the re-dating hypotheses fail to consider Caravaggio’s creative process, namely his ability to adapt to the specific requests of patrons and to recycle, in his later works, figural types and themes from earlier in his career.\n 
Most art historians rely on the accounts of Caravaggio’s seicento and settecento biographers to reconstruct the chronology of his works and understand the trajectory of his career. Of Caravaggio’s biographies, the most informed and pertinent to the Nativity are the vite of Giovanni Baglione (1642), Giovan Pietro Bellori (1672), and Francesco Susinno (1724). Each author writes that Caravaggio visited Palermo, but only Bellori offers a full description of the Nativity and provides the painting’s location in the Oratory of San Lorenzo.\n 
In 1951, Roberto Longhi, a respected early voice in Caravaggio studies, dated the Palermo Nativity to the summer of 1609 based largely on Bellori’s account, surviving archival materials, and the painting’s style. Unlike Longhi, some modern scholars active throughout the twentieth-century have questioned a 1609 date for the Nativity due to its stylistic differences from Caravaggio’s other Sicilian works.  Many of these arguments for giving the Nativity an early Roman period date never gained widespread support in the art-historical community. The vast majority of experts in the field follow Longhi’s lead and believe the narrative forged by Bellori, which places the Nativity in the summer of 1609. Since proposals to re-date the Nativity resurfaced in 2011, more experts, such as Richard Spear and Keith Christiansen, are beginning to accept the possibility of the painting’s earlier date. Considering the frequency with which scholars are beginning to challenge Longhi’s original dating of the Nativity, it is crucial to dive deeply into the documentary and stylistic arguments for a re-dating to assess their legitimacy.\n 
The Fabio Nuti document is central to recent scholarship attempting to re-date the Palermo Nativity to 1600. The notarized contract, dated 5 April 1600 and discovered in the Roman State Archives, offers precious little information about the commission.  Approximate dimensions are estimated in Roman palmi, twelve palmi in height (268 cm) and seven or eight palmi in length (156-180 cm), a standard size for an altarpiece, yet the subject is not described. The contract vaguely mentions that the intended painting would contain figures. The completed work was expected by mid-June 1600, seventy days after the signing of the agreement. Upon receipt of the painting, Caravaggio would be paid a total of two hundred scudi, sixty of which were paid up front on April 5, the day the contract was notarized. A second document, dated 20 November 1600, records the painting’s delivery and Caravaggio’s payment, albeit several months after the June deadline.\n
No subject is given in either document and a final destination for the canvas is not specified; only the dimensions for the prospective picture are provided in the contract, leaving the iconography open for art-historical guesswork. Since the contract’s discovery in 1971, many scholars have proposed previously undocumented works as candidates for the Nuti commission; Alfred Moir was the first to suggest the Nativity as the Nuti painting in 1982. Analyzing the painting’s price, Catherine Puglisi does not propose a specific painting as the work ordered by Nuti, but suggests that the “respectable fee” of two hundred scudi stipulated in the contract could imply that the Nuti painting was a public commission.  Other payments Caravaggio received circa 1600 in Rome for the Contarelli and Cerasi chapel laterals support this claim. These two famous public commissions are roughly contemporaneous with the Nuti painting, and their similarity in prices could indicate that the Nuti work was intended for a Roman church.\n 
Other scholars have attempted to explain the vagueness of the Nuti document. Maurizio Marini suggests the contract was created as the final part of a series of private negotiations between Caravaggio, Fabio Nuti, and Nuti’s appointed artistic committee.  Marini’s reading also implies that the committee came to an informal agreement for the painting and may have drafted the notarized contract as a legal formality to ensure each party was protected, in the artist’s compensation for his work and the delivery of the painting to the commissioner. As everyone involved with the commission was already familiar with its subject, final destination, and terms, there would have been no need to list specifics, beyond the agreed payment and expected delivery time, in the contract.\n
Giovanni Mendola revisited the Nuti document in 2012, identifying the Palermo Nativity as the contract’s painting. His argument is driven by Caravaggio’s nonexistent archival record in Palermo, and, in his opinion, the Nativity’s significant stylistic differences from the other Sicilian altarpieces. Mendola’s archival research in Palermo suggests that the Oratory of San Lorenzo underwent successive renovations in the last decades of the cinquecento and throughout the seicento, and Mendola suspects that an altarpiece would have been commissioned in the jubilee year to be placed in time for St Lawrence’s feast day on 10 August. He attempts to build a network of connections between Caravaggio and his artistic sphere in Rome, members of the Company of St Francis, and Fabio Nuti in order to explain why an Oratory in Palermo would commission a painting from Caravaggio in Rome in 1600.\n 
Mendola’s discovery of a recorded payment, dating to 28 July 1600, for a gilded frame for the high altar of the Oratory fuels his re-dating of the Nativity.  Despite the fact that the contents of this frame and its dimensions are not explicitly stated in the payment receipt, he argues with little supporting evidence that the frame was commissioned exclusively for the Nativity in advance of its arrival in Palermo, and prompts the reader to doubt that a newly renovated oratory would wait nine years—until 1609—for a new altarpiece after already purchasing a frame.  However, the receipt for the gilded frame precedes the second Nuti document recording the painting’s delivery by over three months. It is unpractical, and unlikely, that the Oratory would order a frame specifically for the Nativity without the painting having been completed or already in Palermo.\n 
A more convincing alternative is that the Oratory installed a work in situ on their high altar before the placement of Caravaggio’s Nativity in 1609. Local Sicilian painters who had already frescoed the interior of the Oratory could have painted an altarpiece that was placed before St Lawrence’s feast day on 10 August 1600. This proposal aligns with the 28 July date on the receipt for the gilded frame. Since the Oratory underwent repeated renovations, it is possible that in 1609 Caravaggio’s Nativity replaced the painting originally intended for the gilded frame.\n
  Mendola’s reconstruction of Caravaggio’s social network relies upon undocumented and speculative interactions between members of the Roman confraternity of Santa Maria Odigitria dei Siciliani, Sicilian artists active in Rome, and Caravaggio in order to explain why Nuti commissioned a painting from Caravaggio in 1600 for the Oratory of San Lorenzo in Palermo. Without supporting documentary evidence, it is impossible to reconstruct concrete relationships to convincingly argue that the Nativity is the Nuti painting from 1600.\n
Scholars dating the Nativity to the summer of 1609 tend to approach Caravaggio’s Sicilian works as a cohesive group because according to Bellori and the remaining archival evidence, they were painted within the span of approximately one year. Although the four altarpieces are understood as a product of Caravaggio’s artistic activity on the island, many scholars note that the Palermo Nativity is an outlier stylistically. The Syracuse and Messina altarpieces adhere to a new compositional device Caravaggio developed in Malta, where he began to situate his figures farther away from the picture plane underneath large recesses of empty space.  The pictorial narrative in the Burial of St Lucy, the Raising of Lazarus, and the Adoration of the Shepherds is confined to the bottom portion of the composition; with the exception of the gravediggers in the Burial of St Lucy, the figures in each of these paintings are placed far from the picture plane, emphasizing the scale of the ill-defined setting in each image. The Nativity, in contrast, does not feature a significant area of space above its figures. Instead they form a circle, seated and standing, around the newly born Christ child lying unadorned in the hay; their arrangement produces radial diagonals that direct attention to the divine baby.\n 
Left with a photograph taken before the theft, it is impossible to completely apprehend the Nativity’s facture. However, the thinness of Caravaggio’s paint application is evident in the passages without human figures, notably the vague articulation of a barn above the figures, the ox behind the Virgin, and the bare earth the Christ child is lying on. These passages feature brownish and reddish earth tones and appear to be thinly applied; this is a technique typical of Caravaggio’s late works in Malta, Naples, and especially in Sicily where his constant movement necessitated shorter drying times for his work, resulting in a thinner application of paint.  This method allowed Caravaggio to execute paintings more rapidly by providing his canvas with a base color that affects the visual appearance of additional pigments as they are layered on the picture surface.\n 
Recent discussions attempting to re-date the Nativity point to the laterals Caravaggio made for the Contarelli and Cerasi chapels between 1599-1601 for better comparisons in composition and palette. Michele Cuppone argues that the treatment of space in the Nativity, placing figures closer to the picture plane in a horror vacui, is more consistent with the works of Caravaggio’s mature Roman period, and that the Nativity, more so than the other Sicilian works, contains iconography similar to the works in the Contarelli chapel.  To further separate the Nativity from the other Sicilian altarpieces, Mendola and Cuppone stress its difference in palette. Cuppone argues that the Nativity has a richer palette of bolder colors and more finely defined figures in comparison to the Syracuse and Messina works.  While this is true, the Nativity’s palette is not as vibrant as that of Caravaggio’s Roman works. Minimal splashes of color in the yellow dalmatic of St Lawrence, the reposing Virgin’s red dress, and Joseph’s green-blue shirt and yellow drapery are closer to the peppering of color in the figures of the Messina Adoration.  The subdued colors of these late paintings attest to a different period of Caravaggio’s life and work, and bear little resemblance to the bold, spectacular coloristic effects of a young painter just finding fame through his first public commissions of the Contarelli and Cerasi Chapels.\n
Doubters of the 1609 date argue that the Palermo Nativity is closer in composition and style to the second versions of the Cerasi laterals. These scholars note similarities between the diagonally positioned body of the newborn Christ child and the foreshortened figure of Paul in the Cerasi Conversion of St Paul.  They also compare the diagonal created by the Nativity angel’s outstretched arms to the executioner in the Crucifixion of St Peter who, exposing his dirty feet, crouches to use the entire strength of his body to help lift the weighty figure of Peter on the inverted cross.  A second executioner with his back to the picture plane continues the visual diagonal as he tugs on a rope attached to the cross, straining to make the cross vertical. There are some echoes of these compositional features in the Nativity, yet its treatment of space is far removed from the illusionism of the Cerasi laterals. The Conversion of St Paul and the Crucifixion of St Peter feature strongly foreshortened figures crowded near the picture plane, threatening to enter the viewer’s space at the pinnacle moment of their narratives. In contrast, the figures in the Nativity are stably integrated into the pictorial space underneath the exposed beams of a barn.\n
Caravaggio frequently reused figures, poses, and gestures from his Roman works throughout his life. The Palermo Nativity is not the only altarpiece Caravaggio painted in Sicily that recycles poses and figural types from the works of his mature Roman period. The figure of Christ in the 1608 Raising of Lazarus stands confidently with his right arm horizontally stretched to command the corpse of Lazarus to rise from the dead. This pose, though inverted, is derived from the figure of Christ in the earlier Contarelli Calling of St Matthew, where Christ stands upright with his arm in a similar, pointing position to call upon Matthew to abandon his sinful life. Additionally, in the Burial of St Lucy, the saint’s dead body recalls the bloated, stiff Virgin in the Louvre Death of the Virgin, painted circa 1602-1605.\n  
The banner-carrying angel in the Palermo Nativity is most often compared to the angel in the Contarelli Inspiration of St Matthew. The two angels appear to be painted from direct observation of a young male model lying on a table, giving them a physical presence that confuses the spiritual and earthly space.  Cuppone argues that the angel in the Inspiration of St Matthew, when inverted horizontally, is posed in a similar position as the Nativity angel; both angels extend one leg and bend the other back mid-flight.  X-radiographs of the Inspiration and examination of the paint surface in raking light reveal that Caravaggio made incisions outlining the legs of the angel underneath its layers of billowing drapery.\n  
However, many of Caravaggio’s angels are placed in comparable positions and their narrative function, postures, and gestures are an iconographic type. Caravaggio posed his angels as figure sforzate, or in difficult contortions, to delineate them as divine creatures.  This is true of the Nativity and Inspiration angels, as well as the angel in the Contarelli Martyrdom of St Matthew, who stretches its body over a cloud to place the palm of martyrdom in Matthew’s hand. The Naples Seven Works of Mercy also depicts two embracing angels carrying the Madonna and Child on their backs, one bending his left leg back mid-flight, exposing the back of his calf and ankle to the viewer, while the other angel grips his torso. Despite the approximate five years between the Seven Works and the Inspiration, Caravaggio uses the same figural approach towards the suspended angels in each image; these formal similarities are later recalled in the Palermo Nativity. Thus, we cannot use Caravaggio’s fairly consistent approach to angels as a guide to chronology.\n
  Re-dating arguments also consider the possibility that Caravaggio used a model from his Roman period works for the Virgin in the Nativity. Mendola suggests that Caravaggio used the redhead Anna Bianchini, who appears as a model for the Virgin in several Roman period works, as a model for the Nativity Virgin. Convinced that Bianchini sat for the Nativity, Mendola questions how Caravaggio could have painted her likeness so accurately when four to six years had passed since their last modeling session.  He concludes that the Nativity Virgin’s resemblance to Bianchini means that the Palermo picture was painted in 1600 and commissioned by Nuti. However, this argument assumes that in the Nativity Caravaggio was painting through direct observation of live models rather than from memory. As Caravaggio recalled figural types and specific poses from earlier works throughout his life, especially while he was in Sicily, the reappearance of a certain type of model does not necessarily mean that the figure was painted from a live model from circa 1600. By 1609, late in the artist’s career, Caravaggio often worked from figural types he had internalized and did not work from live models.\n
  Attempts to identify the model for the Palermo Nativity Virgin are too subjective to persuasively contribute to the re-dating discussion. Some scholars have tried to identify similarities among the different models Caravaggio used throughout his life, but there has not been a great deal of agreement or consistency.  For example, while Mendola finds a resemblance between Bianchini and the Virgin in the Nativity, Cuppone argues that Caravaggio used Fillide Melandroni, the model for Judith in the Barberini Judith and Holofernes, as the model for the Palermo Virgin.  Moreover, Puglisi observes similarities between the Palermo Nativity Madonna and the figure of Ursula in the late Martyrdom of St Ursula, painted during his second visit to Naples shortly before his untimely death in 1610.  Caravaggio recycled figural types, including his former models, throughout his career; thus, the appearance of a “Roman model” in the Palermo Nativity cannot suffice as proof that the work was painted in Rome.\n
Of Caravaggio’s biographers, Giovanni Baglione and Francesco Susinno alone comment on the Lombard’s ability to change his style. In his discussion of the Cerasi chapel commission, Baglione explains that the first pair of paintings “did not please the patron” because “at first these two pictures had been painted in a different style.”  By painting the second works in “a different style,” or “un’altra maniera,” Caravaggio was able to adapt to his patrons’ expectations. Susinno also acknowledges Caravaggio’s changeable style. Susinno writes of two pictures of St Jerome Caravaggio painted in Messina, and directs his readers to “notice the diversity of [Caravaggio’s] style, always different, one dry, the other good, without those shadows.”  He also discusses how in the Messina Adoration Caravaggio “abandoned his sketchy, allusive style and demonstrated his naturalism once more without the use of bold shadows.”  Caravaggio’s facility to paint in “un’altra maniera” was evident in Rome circa 1600-1601, as observed by Baglione, and in Sicily in 1609, as observed by Susinno. Thus, instead of seeing the Nativity as an anomaly within the group of paintings created during his short time in Sicily, it is prudent to understand it as the product of his entire artistic life.\n
The stylistic range evident in Caravaggio’s chronology of works shows that his artistic development is not linear; he unpredictably cited compositional solutions and figural types used earlier in his career, and possessed the ability to quickly adapt and change his style to suit his environment and serve his patrons. With Caravaggio’s creative process in mind, I uphold Longhi’s original dating of the Nativity to 1609.\n 
  While the creation date of the Nativity will undoubtedly remain the subject of some debate, arguments to re-date the painting to 1600 have, thus far, been largely driven by speculation. In order for the new date to gain real traction, scholarship must responsibly interpret all documents used to support an earlier date, situate the archival materials within their appropriate cultural contexts, and separate fact from pure conjecture. The date of the Nativity holds implications for the entire Caravaggio field—and beyond. If the early date is accepted, not only will Caravaggio’s chronology change, altering future studies and interpretations, but also the dates for the potential dissemination of his style in Sicily.
")

file = File.open('app/assets/images/CaravaggioNativity.png')
story5.image = file
story5.save!

story3 = Story.new(title: "Where does it come from?", author_id: user2.id, body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.')

file = File.open('app/assets/images/Latin.jpg')
story3.image = file
story3.save!

story4 = Story.new(title: "The Pleasures Of New York By Car", author_id: user3.id, body: "My two cars have enough miles between them to circle the earth ten times at the equator. I prefer the older one, a 2000 Honda Civic that used to belong to my mother-in-law. It has racked up most of its miles in New Jersey, where I live, and in New York City. Nothing about it stands out—not its tan color, or its shape, or the small yellow-and-white 2004 parking decal from the College of Staten Island on its left rear window. If you asked people to draw a car, my Honda is probably about what they would come up with. It has been through a lot. Last year, while driving absent-mindedly, I let it get overheated. I had not paid attention to the greenish stain on the pavement where I parked it. All the coolant had leaked out through a hole in the radiator. I started smelling strange smells, steam and smoke came from under the hood, and I pulled over next to a Baptist church on Route 3 whose occupants immediately emerged to ask if they could help. I had “melted” the engine, my mechanic said later; extreme heat had wrecked it beyond repair. He put in a used engine to replace it.
In eighteen years, the car’s exterior has accumulated some dents. I haven’t noticed them, growing accustomed to them over time. The result is that the car looks different to me from the way it does to other people, just the way my face looks different in my bathroom mirror from the way it does in the security photos of me that the staff behind front desks take before I go into office buildings in Manhattan. I mean that I do not think of my car as a junker.
Recently, I was in a seven-car pileup on the Garden State Parkway. No one was badly hurt, though the multiple collisions totalled several cars. I got hit on the left rear bumper, which was smashed in, along with the tail-light. The plastic part of the bumper was hanging down. A state policeman who assessed the various damages came over to my Honda with his clipboard. He walked around the car, taking it all in. Then he stopped at the trashed bumper, pointed to it and the tail-light, and asked, “Was it like this before?”
Some people say that they hate to drive in the city and that driving in New Jersey is even worse. It’s true that New Jersey can be a bit of a puzzle. I think the state has decided that providing the kind of road signs that actually explain where you should go would do more harm than good, slowing traffic flow at crucial junctures. So the policy seems to be that the driver will learn by trial and error. In complicated places, of which there are many, you make the mistake once or twice or three times and then you learn. The misconception people have about driving in New Jersey is that we Jersey drivers think we are driving. In fact, we are swarming. Freeways are nice, but if you have to redirect down a puddled two-lane road between tall reeds that’s fine, too. Anyplace where you can drive is acceptable, basically. And you have to be able to switch quickly from driving-swarming to merely sitting, when you find yourself in a traffic jam. Then it’s best just to chill out, count how many hot, idling trucks within your field of vision have “Logistics” in their company names, and enjoy the temporarily reduced risk of major accident.")

file = File.open('app/assets/images/dropcar.jpg')
story4.image = file
story4.save!



