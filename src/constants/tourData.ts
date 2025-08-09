// Tour data organized by location for search functionality

export interface Tour {
  id: number;
  name: string;
  location: string;
  province: string;
  region: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  highlights: string[];
  description: string;
  type: "trong-nuoc" | "nuoc-ngoai" | "1-ngay";
  departure: string[];
}

export const toursByLocation: Tour[] = [
  // Miền Bắc
  {
    id: 1,
    name: "Hà Nội - Sapa - Hạ Long",
    location: "Hà Nội",
    province: "Hà Nội",
    region: "Miền Bắc",
    duration: "3 ngày 2 đêm",
    price: "2.999.000 VNĐ",
    rating: 4.8,
    image: "https://picsum.photos/400/250?random=1",
    highlights: ["Ruộng bậc thang", "Vịnh Hạ Long", "Phố cổ Hà Nội"],
    description:
      "Khám phá vẻ đẹp núi rừng Tây Bắc và kỳ quan thiên nhiên thế giới",
    type: "trong-nuoc",
    departure: ["Hà Nội", "TP. Hồ Chí Minh"],
  },
  {
    id: 2,
    name: "Sapa - Fansipan - Bản Cát Cát",
    location: "Sapa",
    province: "Lào Cai",
    region: "Miền Bắc",
    duration: "2 ngày 1 đêm",
    price: "1.899.000 VNĐ",
    rating: 4.7,
    image: "https://picsum.photos/400/250?random=2",
    highlights: ["Đỉnh Fansipan", "Làng bản người H'mông", "Ruộng bậc thang"],
    description: "Chinh phục nóc nhà Đông Dương và khám phá văn hóa dân tộc",
    type: "trong-nuoc",
    departure: ["Hà Nội", "Lào Cai"],
  },
  {
    id: 3,
    name: "Hạ Long - Bái Tử Long",
    location: "Hạ Long",
    province: "Quảng Ninh",
    region: "Miền Bắc",
    duration: "2 ngày 1 đêm",
    price: "2.199.000 VNĐ",
    rating: 4.9,
    image: "https://picsum.photos/400/250?random=3",
    highlights: ["Vịnh Hạ Long", "Động Sung Sót", "Đảo Titop"],
    description:
      "Du ngoạn kỳ quan thiên nhiên thế giới trên du thuyền sang trọng",
    type: "trong-nuoc",
    departure: ["Hà Nội", "Quảng Ninh"],
  },
  {
    id: 4,
    name: "Ninh Bình - Tràng An - Tam Cốc",
    location: "Ninh Bình",
    province: "Ninh Bình",
    region: "Miền Bắc",
    duration: "1 ngày",
    price: "599.000 VNĐ",
    rating: 4.6,
    image: "https://picsum.photos/400/250?random=4",
    highlights: ["Tràng An", "Tam Cốc", "Chùa Bái Đính"],
    description: "Khám phá Hạ Long trên cạn với cảnh quan tuyệt đẹp",
    type: "1-ngay",
    departure: ["Hà Nội", "Ninh Bình"],
  },

  // Miền Trung
  {
    id: 5,
    name: "Đà Nẵng - Hội An - Bà Nà Hills",
    location: "Đà Nẵng",
    province: "Đà Nẵng",
    region: "Miền Trung",
    duration: "3 ngày 2 đêm",
    price: "2.799.000 VNĐ",
    rating: 4.8,
    image: "https://picsum.photos/400/250?random=5",
    highlights: ["Cầu Vàng", "Phố cổ Hội An", "Bãi biển Mỹ Khê"],
    description: "Trải nghiệm thành phố đáng sống và di sản văn hóa thế giới",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"],
  },
  {
    id: 6,
    name: "Hội An - Mỹ Sơn - Cù Lao Chàm",
    location: "Hội An",
    province: "Quảng Nam",
    region: "Miền Trung",
    duration: "2 ngày 1 đêm",
    price: "1.999.000 VNĐ",
    rating: 4.7,
    image: "https://picsum.photos/400/250?random=6",
    highlights: ["Phố cổ Hội An", "Thánh địa Mỹ Sơn", "Đảo Cù Lao Chàm"],
    description: "Khám phá di sản văn hóa và thiên nhiên của miền Trung",
    type: "trong-nuoc",
    departure: ["Đà Nẵng", "TP. Hồ Chí Minh"],
  },
  {
    id: 7,
    name: "Huế - Phong Nha - Động Thiên Đường",
    location: "Huế",
    province: "Thừa Thiên Huế",
    region: "Miền Trung",
    duration: "3 ngày 2 đêm",
    price: "2.599.000 VNĐ",
    rating: 4.6,
    image: "https://picsum.photos/400/250?random=7",
    highlights: ["Đại Nội Huế", "Động Phong Nha", "Sông Hương"],
    description: "Thăm cố đô Huế và khám phá động hang kỳ vĩ",
    type: "trong-nuoc",
    departure: ["Huế", "Đà Nẵng", "TP. Hồ Chí Minh"],
  },
  {
    id: 8,
    name: "Nha Trang - Vinpearl - Đảo Hòn Mun",
    location: "Nha Trang",
    province: "Khánh Hòa",
    region: "Miền Trung",
    duration: "3 ngày 2 đêm",
    price: "3.199.000 VNĐ",
    rating: 4.8,
    image: "https://picsum.photos/400/250?random=8",
    highlights: ["Vinpearl Land", "Bãi biển Nha Trang", "Lặn ngắm san hô"],
    description: "Nghỉ dưỡng biển và vui chơi giải trí đẳng cấp",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Hà Nội", "Nha Trang"],
  },

  // Miền Nam
  {
    id: 9,
    name: "TP.HCM - Đà Lạt - Thác Elephant",
    location: "Đà Lạt",
    province: "Lâm Đồng",
    region: "Miền Nam",
    duration: "2 ngày 1 đêm",
    price: "1.799.000 VNĐ",
    rating: 4.7,
    image: "https://picsum.photos/400/250?random=9",
    highlights: ["Thành phố ngàn hoa", "Thác Elephant", "Ga Đà Lạt"],
    description: "Thư giãn trong không khí mát mẻ của thành phố sương mù",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Đà Lạt"],
  },
  {
    id: 10,
    name: "Cần Thơ - Chợ nổi Cái Răng",
    location: "Cần Thơ",
    province: "Cần Thơ",
    region: "Miền Nam",
    duration: "2 ngày 1 đêm",
    price: "1.399.000 VNĐ",
    rating: 4.5,
    image: "https://picsum.photos/400/250?random=10",
    highlights: ["Chợ nổi Cái Răng", "Vườn trái cây", "Làng nổi"],
    description: "Khám phá đời sống miệt vườn sông nước miền Tây",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Cần Thơ"],
  },
  {
    id: 11,
    name: "Phú Quốc - Nam Du - Cable Car",
    location: "Phú Quốc",
    province: "Kiên Giang",
    region: "Miền Nam",
    duration: "3 ngày 2 đêm",
    price: "3.599.000 VNĐ",
    rating: 4.9,
    image: "https://picsum.photos/400/250?random=11",
    highlights: [
      "Đảo ngọc Phú Quốc",
      "Cable Car dài nhất thế giới",
      "Sunset Sanato",
    ],
    description: "Nghỉ dưỡng cao cấp trên đảo ngọc của Việt Nam",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Phú Quốc"],
  },
  {
    id: 12,
    name: "Vũng Tàu - Côn Đảo",
    location: "Vũng Tàu",
    province: "Bà Rịa - Vũng Tàu",
    region: "Miền Nam",
    duration: "2 ngày 1 đêm",
    price: "2.299.000 VNĐ",
    rating: 4.6,
    image: "https://picsum.photos/400/250?random=12",
    highlights: ["Bãi biển Vũng Tàu", "Đảo Côn Đảo", "Nhà tù Côn Đảo"],
    description: "Kết hợp nghỉ dưỡng và tìm hiểu lịch sử dân tộc",
    type: "trong-nuoc",
    departure: ["TP. Hồ Chí Minh", "Vũng Tàu"],
  },
];

// Utility function to normalize Vietnamese text (remove accents)
export const removeVietnameseAccents = (str: string): string => {
  // Input validation
  if (!str || typeof str !== "string") {
    console.warn(
      "⚠️ removeVietnameseAccents: invalid input, returning empty string"
    );
    return "";
  }

  try {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
  } catch (error) {
    console.error("❌ removeVietnameseAccents: normalization failed", error);
    return str.toLowerCase(); // Fallback to simple lowercase
  }
};

// Location aliases and common variations
export const locationAliases: { [key: string]: string[] } = {
  "đà nẵng": ["da nang", "danang", "đa nẵng", "da năng"],
  "hồ chí minh": [
    "ho chi minh",
    "tp hcm",
    "hcm",
    "sai gon",
    "sài gòn",
    "saigon",
    "tp.hcm",
    "tphcm",
    "ho chi minh city",
  ],
  "hà nội": ["ha noi", "hanoi", "thủ đô", "thu do"],
  sapa: ["sa pa", "sa-pa"],
  "hạ long": [
    "ha long",
    "halong",
    "vinh ha long",
    "vịnh hạ long",
    "vinh halong",
  ],
  "phú quốc": ["phu quoc", "phuquoc", "đảo ngọc", "dao ngoc"],
  "nha trang": ["nhatrang"],
  "hội an": ["hoi an", "hoian", "phố cổ", "pho co"],
  huế: ["hue", "cố đô", "co do"],
  "vũng tàu": ["vung tau", "vungtau"],
  "cần thơ": ["can tho", "cantho"],
  "đà lạt": ["da lat", "dalat", "thành phố ngàn hoa", "thanh pho ngan hoa"],
  "ninh bình": [
    "ninh binh",
    "ninhbinh",
    "hạ long trên cạn",
    "ha long tren can",
  ],
  "quy nhơn": ["quy nhon", "quynhon"],
  "mũi né": ["mui ne", "muine"],
  "côn đảo": ["con dao", "condao"],
  "bà nà": ["ba na", "bana", "bà nà hills", "ba na hills"],
  "mỹ sơn": ["my son", "myson"],
  "phong nha": ["phongnha", "động phong nha", "dong phong nha"],
  "tam cốc": ["tam coc", "tamcoc"],
  "tràng an": ["trang an", "trangan"],
};

// Create reverse mapping for quick lookup
export const reverseAliases: { [key: string]: string } = {};
Object.entries(locationAliases).forEach(([canonical, variants]) => {
  // Add the canonical form
  reverseAliases[removeVietnameseAccents(canonical)] =
    removeVietnameseAccents(canonical);

  // Add all variants pointing to canonical
  variants.forEach((variant) => {
    reverseAliases[removeVietnameseAccents(variant)] =
      removeVietnameseAccents(canonical);
  });
});

// Calculate similarity score between two strings (0-1, higher is more similar)
export const calculateSimilarity = (str1: string, str2: string): number => {
  // Input validation
  if (!str1 || !str2 || typeof str1 !== "string" || typeof str2 !== "string") {
    console.warn("⚠️ calculateSimilarity: invalid input strings");
    return 0;
  }

  if (str1 === str2) return 1.0;

  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  try {
    // Count matching characters
    let matches = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (longer.includes(shorter[i])) {
        matches++;
      }
    }

    const similarity = matches / longer.length;
    return Math.max(0, Math.min(1, similarity)); // Ensure result is between 0 and 1
  } catch (error) {
    console.error("❌ calculateSimilarity: calculation failed", error);
    return 0;
  }
};

// Enhanced search function with smart matching
export const searchToursByLocation = (query: string): Tour[] => {
  // Input validation
  if (!query || typeof query !== "string") {
    console.warn("⚠️ Invalid search query provided");
    return [];
  }

  if (!query.trim()) {
    console.log("ℹ️ Empty search query, returning empty results");
    return [];
  }

  if (query.length > 100) {
    console.warn("⚠️ Search query too long, truncating to 100 characters");
    query = query.substring(0, 100);
  }

  const normalizedQuery = removeVietnameseAccents(query.trim());
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length >= 2);

  console.log(
    `🔍 Searching for: "${query}" -> normalized: "${normalizedQuery}"`
  );
  console.log(
    `🎯 Canonical for "${normalizedQuery}": ${reverseAliases[normalizedQuery] || "none"}`
  );

  const results = toursByLocation
    .filter((tour) => {
      console.log(`\n🔎 Checking: ${tour.name}`);

      // Primary search fields (location, province, name)
      const primaryFields = [tour.location, tour.province, tour.name];
      const normalizedPrimary = primaryFields.map((field) =>
        removeVietnameseAccents(field)
      );

      console.log(`   📍 Primary fields: [${normalizedPrimary.join(", ")}]`);

      // Secondary fields (highlights, region) - currently unused but kept for future enhancement
      // const secondaryFields = [tour.region, ...tour.highlights];
      // const normalizedSecondary = secondaryFields.map((field) =>
      //   removeVietnameseAccents(field)
      // );

      // let score = 0; // Currently unused but kept for future scoring implementation
      let matchReason = "";

      // 1. Check for EXACT matches in primary fields (highest priority)
      const exactPrimaryMatch = normalizedPrimary.some((field) => {
        const match =
          field.includes(normalizedQuery) || normalizedQuery.includes(field);
        if (match) {
          matchReason = `Exact match in primary field: "${field}"`;
        }
        return match;
      });

      if (exactPrimaryMatch) {
        console.log(`✅ ${tour.name}: ${matchReason}`);
        return true;
      }

      // 2. Check aliases for the full query
      const canonicalQuery = reverseAliases[normalizedQuery];
      if (canonicalQuery) {
        const aliasMatch = normalizedPrimary.some((field) => {
          const canonicalField = reverseAliases[field];
          // Must be exact canonical match, not substring
          const match = canonicalField === canonicalQuery;
          if (match) {
            matchReason = `Alias match: "${canonicalQuery}" === "${canonicalField}"`;
          }
          return match;
        });

        if (aliasMatch) {
          console.log(`✅ ${tour.name}: ${matchReason}`);
          return true;
        }
      }

      // 3. Check word-by-word matching in primary fields only (VERY STRICT)
      if (queryWords.length > 0) {
        const wordMatch = queryWords.some((queryWord) => {
          // Skip very short words to avoid false positives
          if (queryWord.length < 3) return false;

          return normalizedPrimary.some((field) => {
            const fieldWords = field.split(/\s+/);
            const match = fieldWords.some((fieldWord) => {
              // Only exact substring matches for words >= 4 chars
              if (queryWord.length >= 4 && fieldWord.includes(queryWord)) {
                matchReason = `Exact substring: "${queryWord}" in "${fieldWord}"`;
                return true;
              }

              // For 3-char words, must be exact match or very high similarity
              if (queryWord.length === 3) {
                if (fieldWord === queryWord) {
                  matchReason = `Exact word match: "${queryWord}" === "${fieldWord}"`;
                  return true;
                }

                if (fieldWord.length === 3) {
                  const similarity = calculateSimilarity(queryWord, fieldWord);
                  if (similarity >= 0.9) {
                    matchReason = `High similarity: "${queryWord}" ~= "${fieldWord}" (${similarity.toFixed(2)})`;
                    return true;
                  }
                }
              }

              return false;
            });
            return match;
          });
        });

        if (wordMatch) {
          console.log(`✅ ${tour.name}: ${matchReason}`);
          return true;
        }
      }

      // 4. DISABLED: Secondary field matching to avoid false positives
      // Only match in primary fields (location, province, name) for accuracy

      console.log(`❌ ${tour.name}: No match`);
      return false;
    })
    .sort((a, b) => {
      // Sort by relevance - prioritize location/province matches
      const aLocation = removeVietnameseAccents(a.location);
      const bLocation = removeVietnameseAccents(b.location);
      const aProvince = removeVietnameseAccents(a.province);
      const bProvince = removeVietnameseAccents(b.province);

      const aLocationMatch =
        aLocation.includes(normalizedQuery) ||
        normalizedQuery.includes(aLocation);
      const bLocationMatch =
        bLocation.includes(normalizedQuery) ||
        normalizedQuery.includes(bLocation);

      if (aLocationMatch && !bLocationMatch) return -1;
      if (!aLocationMatch && bLocationMatch) return 1;

      const aProvinceMatch =
        aProvince.includes(normalizedQuery) ||
        normalizedQuery.includes(aProvince);
      const bProvinceMatch =
        bProvince.includes(normalizedQuery) ||
        normalizedQuery.includes(bProvince);

      if (aProvinceMatch && !bProvinceMatch) return -1;
      if (!aProvinceMatch && bProvinceMatch) return 1;

      return 0;
    });

  console.log(`🎯 Found ${results.length} results for "${query}"`);
  return results;
};

export const filterToursByType = (tours: Tour[], type: string): Tour[] => {
  // Input validation
  if (!Array.isArray(tours)) {
    console.error("❌ filterToursByType: tours must be an array");
    return [];
  }

  if (!type || typeof type !== "string") {
    console.warn(
      "⚠️ filterToursByType: invalid type parameter, returning all tours"
    );
    return tours;
  }

  if (type === "Loại tour...") return tours;

  const typeMap: { [key: string]: string } = {
    "Tour trong nước": "trong-nuoc",
    "Tour nước ngoài": "nuoc-ngoai",
    "Tour 1 ngày": "1-ngay",
  };

  const mappedType = typeMap[type];
  if (!mappedType) {
    console.warn(
      `⚠️ filterToursByType: unknown type "${type}", returning all tours`
    );
    return tours;
  }

  return tours.filter((tour) => tour && tour.type === mappedType);
};

export const filterToursByDeparture = (
  tours: Tour[],
  departure: string
): Tour[] => {
  // Input validation
  if (!Array.isArray(tours)) {
    console.error("❌ filterToursByDeparture: tours must be an array");
    return [];
  }

  if (!departure || typeof departure !== "string") {
    console.warn(
      "⚠️ filterToursByDeparture: invalid departure parameter, returning all tours"
    );
    return tours;
  }

  if (departure === "Khởi hành...") return tours;

  return tours.filter(
    (tour) =>
      tour &&
      Array.isArray(tour.departure) &&
      tour.departure.includes(departure)
  );
};

export const filterToursByDestination = (
  tours: Tour[],
  destination: string
): Tour[] => {
  // Input validation
  if (!Array.isArray(tours)) {
    console.error("❌ filterToursByDestination: tours must be an array");
    return [];
  }

  if (!destination || typeof destination !== "string") {
    console.warn(
      "⚠️ filterToursByDestination: invalid destination parameter, returning all tours"
    );
    return tours;
  }

  if (destination === "Điểm đến...") return tours;

  return tours.filter((tour) => tour && tour.region === destination);
};
