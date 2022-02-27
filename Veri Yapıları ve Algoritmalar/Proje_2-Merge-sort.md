##Proje 2 - Merge Sort

[16,21,11,8,12,22]

**Soru 1:** Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

**Çözüm:**
`[16,21,11] [8,12,22]`
`[16] [21,11] [8,12] [22]`
`[16] [21] [11] [8] [12] [22]`
`[16] [11,21] [8,12] [22]`
`[11,16,21] [8,12,22]`
`[8,11,12,16,21,22]`

**Soru 2:** Big-O gösterimini yazınız.

**Çözüm:** Her satırda yapılan sıralama işlemi için Big-O Notation O(n)'dir.
Dizinin parçalanmasının işlem sayısı
2^x=n => logn'dir.
Bu sebeple Merge Sort'un Big-O Notation'ı `O(nlogn)` olur.