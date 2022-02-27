##Project 1 - Insertion Sort

[22,27,16,2,18,6]

**Soru 1:** Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.

**Çözüm:**
[2,27,16,22,18,6]
[2,6,16,22,18,27]
[2,6,16,22,18,27]
[2,6,16,18,22,27]

**Soru 2:** Big-O gösterimini yazınız.

**Çözüm:** Insertion Sort için time complexitysi (n^2-n)/2'dir. Time complexity'nin dominantı n^2 olduğundan Big-O Notaiton O(n^2)'dir.

**Soru 3:** Dizi sıralandıktan sonra 18 hangi case kapsamına girer? Yazınız.

**Çözüm:** Verilen dizinin sıralı hali; [2,6,16,18,22,27]'dir. 18 dizinin ortalarında yer aldığı için; 18 avarage case kapsamındadır.

**Soru 4:** [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

**Çözüm:**
- [2,3,5,8,7,9,4,15,6] => 1. Adım
- [2,3,5,8,7,9,4,15,6] => 2. Adım
- [2,3,4,8,7,9,5,15,6] => 3. Adım
- [2,3,5,6,7,9,4,15,8] => 4. Adım