// Embedded Family Tree Data to avoid CORS issues when run via file:// protocol
const familyData = {
  "id": "root_ancestor",
  "name": "Nguyễn Văn Hộ (Hiệu Phúc Cảnh) & Lê Hiệu Diệu Long",
  "generation": 1,
  "husband": {
    "name": "Nguyễn Văn Hộ",
    "title": "Cụ Ông",
    "alias": "Hiệu Phúc Cảnh",
    "anniversary": "16-12"
  },
  "wife": {
    "name": "Lê Hiệu Diệu Long",
    "title": "Cụ Bà",
    "anniversary": "28-6"
  },
  "notes": "Cụ Tổ Chi (Trưởng Chi - Nguyễn Văn Hồ)",
  "children": [
    {
      "id": "gen2_nguyen_van_luong",
      "name": "Nguyễn Văn Lương & Phạm Thị Quận",
      "generation": 2,
      "husband": {
        "name": "Nguyễn Văn Lương",
        "title": "Cụ Ông",
        "anniversary": "1-6"
      },
      "wife": {
        "name": "Phạm Thị Quận",
        "title": "Cụ Bà",
        "alias": "Hiệu Thực Lương",
        "anniversary": "24-7"
      },
      "children": [
        {
          "id": "gen3_nguyen_thi_luong",
          "name": "Nguyễn Thị Lượng & Nguyễn V Xuất",
          "generation": 3,
          "wife": {
            "name": "Nguyễn Thị Lượng",
            "title": "Cụ Bà"
          },
          "husband": {
            "name": "Nguyễn V Xuất"
          },
          "notes": "Lấy chồng Nguyễn V Xuất"
        },
        {
          "id": "gen3_nguyen_van_hao",
          "name": "Nguyễn Văn Hảo & Vợ",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Hảo",
            "title": "Cụ Ông",
            "anniversary": "28-12"
          },
          "wife": {
            "name": "Cụ Bà"
          },
          "children": [
            {
              "id": "gen4_trum_cach",
              "name": "Ông Trùm Cách (Trực Điển)",
              "generation": 4,
              "husband": {
                "name": "Ông Trùm Cách",
                "alias": "Trực Điển",
                "notes": "Mất lúc 20 tuổi"
              },
              "wife": {
                "name": "Nguyễn Thị Lấy / Phùng Thị Đồng",
                "notes": "Vợ cả: Nguyễn Thị Liên (Giỗ: 4-10). Vợ hai: Phùng Thị Đồng (Giỗ: 1-12)"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_loi",
                  "name": "Bà Nguyễn V Nhật & Chồng",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn V Nhật (Thịnh)"
                  },
                  "husband": {
                    "name": "Ông Thọ"
                  },
                  "children": [
                    { "id": "gen6_tho", "name": "Ô. Thọ", "generation": 6, "husband": { "name": "Ô. Thọ" } },
                    { "id": "gen6_tit", "name": "Ô. Tít", "generation": 6, "husband": { "name": "Ô. Tít" } },
                    { "id": "gen6_phanh", "name": "Ô. Phanh", "generation": 6, "husband": { "name": "Ô. Phanh" } },
                    { "id": "gen6_dinh", "name": "Ô. Đỉnh (trên Sơn Tây)", "generation": 6, "husband": { "name": "Ô. Đỉnh", "notes": "trên Sơn Tây" } },
                    { "id": "gen6_lai", "name": "Ô. Lài", "generation": 6, "husband": { "name": "Ô. Lài" } },
                    { "id": "gen6_che", "name": "Ô. Chế", "generation": 6, "husband": { "name": "Ô. Chế" } },
                    { "id": "gen6_tich", "name": "B. Tích", "generation": 6, "wife": { "name": "B. Tích" } },
                    { "id": "gen6_yen", "name": "B. Yến", "generation": 6, "wife": { "name": "B. Yến" } }
                  ]
                },
                {
                  "id": "gen5_nguyen_van_xuan",
                  "name": "Nguyễn Văn Hộ & Hà Thuân",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Hộ"
                  },
                  "wife": {
                    "name": "Hà Thuân"
                  }
                },
                {
                  "id": "gen5_phung_viet_vung",
                  "name": "Phùng Việt Vũng & Hoa",
                  "generation": 5,
                  "husband": {
                    "name": "Phùng Việt Vũng"
                  },
                  "wife": {
                    "name": "Hoa"
                  }
                },
                {
                  "id": "gen5_nguyen_thi_ti",
                  "name": "Nhánh Bà Nguyễn Thị Tị (Sửu)",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Tị (Sửu)"
                  },
                  "children": [
                    { "id": "gen6_tu", "name": "B. Tụ", "generation": 6, "wife": { "name": "B. Tụ", "notes": "Bà cả" } },
                    { "id": "gen6_dung", "name": "B. Dựng", "generation": 6, "wife": { "name": "B. Dựng" } },
                    { "id": "gen6_canh", "name": "B. Canh", "generation": 6, "wife": { "name": "B. Canh" } },
                    { "id": "gen6_teo", "name": "Ô. Tèo (chết trẻ)", "generation": 6, "husband": { "name": "Ô. Tèo", "notes": "chết trẻ" } },
                    { "id": "gen6_dien", "name": "Ô. Điện (chết trẻ)", "generation": 6, "husband": { "name": "Ô. Điện", "notes": "chết trẻ" } },
                    { "id": "gen6_cuc", "name": "B. Cúc (Tích)", "generation": 6, "wife": { "name": "B. Cúc", "alias": "Tích" } },
                    { "id": "gen6_tam", "name": "B. Tám", "generation": 6, "wife": { "name": "B. Tám" } },
                    { "id": "gen6_mon", "name": "B. Mọn (Ngả)", "generation": 6, "wife": { "name": "B. Mọn", "alias": "Ngả" } },
                    { "id": "gen6_that", "name": "B. Thật (vợ Ô. Sinh)", "generation": 6, "wife": { "name": "B. Thật", "notes": "vợ Ô. Sinh" } },
                    { "id": "gen6_phuong", "name": "B. Phương", "generation": 6, "wife": { "name": "B. Phương" } },
                    { "id": "gen6_thu", "name": "B. Thu", "generation": 6, "wife": { "name": "B. Thu" } },
                    { "id": "gen6_nga", "name": "B. Nga", "generation": 6, "wife": { "name": "B. Nga" } }
                  ]
                },
                {
                  "id": "gen5_nguyen_van_nghe",
                  "name": "Nguyễn Văn Nghệ (Lập)",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Nghệ",
                    "alias": "Lập",
                    "anniversary": "8-2"
                  }
                },
                {
                  "id": "gen5_nguyen_van_nghiep",
                  "name": "Nguyễn Văn Nghiệp",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Nghiệp",
                    "anniversary": "14-3"
                  }
                }
              ]
            },
            {
              "id": "gen4_trum_nghi",
              "name": "Ông Trùm Nghị & Bà Cản",
              "generation": 4,
              "husband": {
                "name": "Ông Trùm Nghị"
              },
              "wife": {
                "name": "Bà Cản",
                "anniversary": "24-1"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_ho",
                  "name": "Nguyễn Văn Hồ & Nguyễn Thị Huân",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Hồ"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Huân"
                  }
                }
              ]
            },
            {
              "id": "gen4_tuong",
              "name": "Ông Tưởng",
              "generation": 4,
              "husband": {
                "name": "Ông Tưởng"
              }
            },
            {
              "id": "gen4_du",
              "name": "Bà Đủ (Bà Lộc)",
              "generation": 4,
              "wife": {
                "name": "Bà Đủ",
                "alias": "Bà Lộc"
              }
            },
            {
              "id": "gen4_lum",
              "name": "Ông Lựm",
              "generation": 4,
              "husband": {
                "name": "Ông Lựm"
              }
            },
            {
              "id": "gen4_man",
              "name": "Ông Mân",
              "generation": 4,
              "husband": {
                "name": "Ông Mân"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_cuong",
          "name": "Nguyễn V Cường & Đỗ Thị Bủn",
          "generation": 3,
          "husband": {
            "name": "Nguyễn V Cường",
            "title": "Cụ Ông"
          },
          "wife": {
            "name": "Đỗ Thị Bủn",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Kiên",
            "anniversary": "23-4"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_trang",
              "name": "Nguyễn Văn Tráng & Nguyễn Thị Lý",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Tráng",
                "anniversary": "14-2"
              },
              "wife": {
                "name": "Nguyễn Thị Lý"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_thinh",
                  "name": "Nguyễn Văn Thịnh",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Thịnh"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_phung",
              "name": "Nguyễn Văn Phúng & Các Vợ",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Phúng",
                "anniversary": "30-12"
              },
              "wife": {
                "name": "Cụ Bà 1 / Cụ Bà 2",
                "notes": "Cụ Bà 1 (Giỗ: 20-1). Cụ Bà 2 (Giỗ: 8-8)"
              },
              "children": [
                { "id": "gen5_gai", "name": "Bà Gái", "generation": 5, "wife": { "name": "Bà Gái", "notes": "Giỗ 16-10 tuổi" } },
                { "id": "gen5_lam_san", "name": "B. Làm Sân", "generation": 5, "wife": { "name": "B. Làm Sân" } },
                { "id": "gen5_sanh_con", "name": "Sành Con", "generation": 5 },
                { "id": "gen5_thuy", "name": "Ô. Thủy", "generation": 5, "husband": { "name": "Ô. Thủy" } },
                { "id": "gen5_thuan", "name": "Ô. Thuận", "generation": 5, "husband": { "name": "Ô. Thuận" } },
                { "id": "gen5_du", "name": "B. Đủ", "generation": 5, "wife": { "name": "B. Đủ" } },
                { "id": "gen5_kha", "name": "B. Kha", "generation": 5, "wife": { "name": "B. Kha" } }
              ]
            },
            {
              "id": "gen4_nguyen_van_lich",
              "name": "Nguyễn Văn Lịch & Trần Thị Liên",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Lịch",
                "alias": "Phúc Hòa"
              },
              "wife": {
                "name": "Trần Thị Liên",
                "anniversary": "26-12"
              },
              "children": [
                { "id": "gen5_ta", "name": "B. Tả", "generation": 5, "wife": { "name": "B. Tả" } },
                { "id": "gen5_ta_2", "name": "B. Tạ", "generation": 5, "wife": { "name": "B. Tạ" } },
                { "id": "gen5_chan", "name": "Ô. Chấn", "generation": 5, "husband": { "name": "Ô. Chấn" } }
              ]
            },
            {
              "id": "gen4_nguyen_van_su",
              "name": "Nguyễn Văn Sự & Phùng Thị Lý",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Sự",
                "alias": "Phúc Đăng",
                "anniversary": "29-6"
              },
              "wife": {
                "name": "Phùng Thị Lý",
                "alias": "Diệu Tình",
                "anniversary": "25-12"
              }
            },
            {
              "id": "gen4_nguyen_thi_thu",
              "name": "Nguyễn Thị Thứ",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Thứ",
                "alias": "Trực Khang",
                "anniversary": "25-12"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_vat",
          "name": "Nguyễn V Vật & Hoàng Thị Cận",
          "generation": 3,
          "husband": {
            "name": "Nguyễn V Vật",
            "title": "Cụ Ông",
            "anniversary": "28-12"
          },
          "wife": {
            "name": "Hoàng Thị Cận",
            "title": "Cụ Bà"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_trung",
              "name": "Nguyễn Văn Trung",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Trung",
                "alias": "Trực Hoàn",
                "anniversary": "28-12"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_luc",
          "name": "Nguyễn Văn Lực & Nguyễn Thị Công",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Lực",
            "title": "Cụ Ông",
            "alias": "Phúc Tài",
            "anniversary": "12-2"
          },
          "wife": {
            "name": "Nguyễn Thị Công",
            "title": "Cụ Bà",
            "alias": "Trực Ngân",
            "anniversary": "4-5"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_bac",
              "name": "Nguyễn Văn Bắc & Ngô Thị Ngọc",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Bắc",
                "alias": "Trực Kính"
              },
              "wife": {
                "name": "Ngô Thị Ngọc",
                "notes": "Quê quán: Phú Hòa Minh"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_huy",
                  "name": "Nguyễn Văn Huy & Vợ",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Huy",
                    "alias": "Hùng",
                    "anniversary": "17-3"
                  },
                  "wife": {
                    "name": "Bà Cận"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_tin",
              "name": "Nguyễn Thị Tín & Nguyễn Lưu Văn Chu",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tín",
                "alias": "T - Còn"
              },
              "husband": {
                "name": "Nguyễn Lưu Văn Chu"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_hong",
                  "name": "Nguyễn Văn Hồng & Nguyễn Thị Kính",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Hồng",
                    "alias": "Lưu"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Kính",
                    "notes": "Quê quán: Trình Thắng / Trị Thắng"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_khanh",
              "name": "Nguyễn Thị Khanh & Nguyễn Văn Oành",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Khanh",
                "anniversary": "17-3"
              },
              "husband": {
                "name": "Nguyễn Văn Oành",
                "notes": "Khanh Thuận Vàng"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_chu",
                  "name": "Nguyễn Văn Chu & Lưu Thị Tín",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Chu"
                  },
                  "wife": {
                    "name": "Lưu Thị Tín",
                    "alias": "T - Còn",
                    "anniversary": "2-7"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_khuyen",
              "name": "Nguyễn Thị Khuyên",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Khuyên",
                "alias": "Phúc Cận",
                "anniversary": "2-7"
              },
              "children": [
                {
                  "id": "gen5_khuyen_child",
                  "name": "Bà Nguyễn Thị Khuyên & Lý Văn Chúc",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Khuyên",
                    "alias": "Phúc Cận",
                    "anniversary": "2-7"
                  },
                  "husband": {
                    "name": "Lý Văn Chúc"
                  },
                  "notes": "Mất lúc 12 tuổi"
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_ty",
          "name": "Nguyễn Văn Tý & Lê Thị Phúc",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Tý",
            "title": "Cụ Ông",
            "alias": "Phúc Tiểu / Téo",
            "notes": "2-7"
          },
          "wife": {
            "name": "Lê Thị Phúc",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Ý",
            "anniversary": "8-8"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_kinh",
              "name": "Nguyễn Văn Kính",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Kính",
                "alias": "Hiệu Thực Thu"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_hoi",
                  "name": "Nguyễn Văn Hội & Nguyễn Thị Bìm",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Hội"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Bìm"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_khuyen",
              "name": "Nguyễn Văn Khuyến",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Khuyến",
                "alias": "Phúc Cận",
                "anniversary": "2-7",
                "notes": "Mất lúc 12 tuổi"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_khuyet",
                  "name": "Nguyễn Văn Khuyết",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Khuyết"
                  },
                  "notes": "Tên: Nguyễn Thị Bỉm"
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_thi_ngo",
          "name": "Nguyễn Thị Ngọ",
          "generation": 3,
          "wife": {
            "name": "Nguyễn Thị Ngọ",
            "title": "Cụ Bà"
          },
          "children": [
            {
              "id": "gen4_nguyen_thi_bim",
              "name": "Bà Nguyễn Thị Bỉm & Nguyễn V Vui",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Bỉm"
              },
              "husband": {
                "name": "Nguyễn V Vui"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_hy",
          "name": "Nguyễn V Hỷ & Nguyễn Thị Íp",
          "generation": 3,
          "husband": {
            "name": "Nguyễn V Hỷ",
            "title": "Cụ Ông",
            "alias": "Phúc Nghĩa",
            "anniversary": "3-7"
          },
          "wife": {
            "name": "Nguyễn Thị Íp",
            "title": "Cụ Bà",
            "alias": "Quảng Lập",
            "anniversary": "10-12"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_khuyet_early",
              "name": "Nguyễn Văn Khuyết (chết trẻ)",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Khuyết",
                "notes": "Chết trẻ"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_quan",
          "name": "Nguyễn Văn Quản & Nguyễn Thị Ban",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Quản",
            "title": "Cụ Ông"
          },
          "wife": {
            "name": "Nguyễn Thị Ban",
            "title": "Cụ Bà",
            "anniversary": "8-10"
          },
          "children": [
            {
              "id": "gen4_quan_nguyen_thi_thanh",
              "name": "Bà Nguyễn Thị Thành & Đỗ Văn Diệu",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Thành",
                "anniversary": "19-2"
              },
              "husband": {
                "name": "Đỗ Văn Diệu",
                "alias": "Tứu",
                "anniversary": "2-1"
              },
              "children": [
                {
                  "id": "gen5_nguyen_thi_thuan",
                  "name": "Bà Nguyễn Thị Thuận & Nguyễn Văn Hòa",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Thuận",
                    "anniversary": "9-2"
                  },
                  "husband": {
                    "name": "Nguyễn Văn Hòa",
                    "anniversary": "1-8"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_tinh",
              "name": "Bà Nguyễn Thị Tình & Nguyễn Hữu Đường",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tình",
                "anniversary": "21-9"
              },
              "husband": {
                "name": "Nguyễn Hữu Đường"
              },
              "children": [
                {
                  "id": "gen5_quan_nguyen_van_bien",
                  "name": "Nguyễn Văn Biên & Nguyễn Thị Bé",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Biên",
                    "anniversary": "9-2"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Bé",
                    "anniversary": "27-4"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_lon",
              "name": "Bà Nguyễn Thị Lớn & Nguyễn Văn Hùng",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Lớn",
                "anniversary": "10-8"
              },
              "husband": {
                "name": "Nguyễn Văn Hùng"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_chien",
                  "name": "Nguyễn Văn Chiến & Lại Thị Thi",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Chiến"
                  },
                  "wife": {
                    "name": "Lại Thị Thi"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_phu",
              "name": "Nguyễn Văn Phú & Nguyễn Thị Xoan",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Phú",
                "alias": "Mận",
                "anniversary": "9-11"
              },
              "wife": {
                "name": "Nguyễn Thị Xoan"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_dong",
                  "name": "Nguyễn Văn Đông & Nguyễn Thị Thuận",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Đông",
                    "anniversary": "28-3"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Thuận",
                    "anniversary": "29-9"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_tan",
              "name": "Bà Nguyễn Thị Tàn & Chồng",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tàn"
              },
              "husband": {
                "name": "Lê Hữu"
              },
              "children": [
                {
                  "id": "gen5_nguyen_thi_toan",
                  "name": "Bà Nguyễn Thị Toàn & Nguyễn Văn Hiền",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Toàn"
                  },
                  "husband": {
                    "name": "Nguyễn Văn Hiền"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_hieu",
          "name": "Nguyễn Văn Hiệu & Đỗ Thị Diệu",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Hiệu",
            "title": "Cụ Ông"
          },
          "wife": {
            "name": "Đỗ Thị Diệu",
            "title": "Cụ Bà",
            "anniversary": "8-10"
          },
          "children": [
            {
              "id": "gen4_nguyen_thi_hoa",
              "name": "Bà Nguyễn Thị Hoa & Nguyễn Văn Liên",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Hoa",
                "alias": "Phúc Đạo",
                "anniversary": "21-1"
              },
              "husband": {
                "name": "Nguyễn Văn Liên"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_man",
                  "name": "Nguyễn Văn Mẫn & Lê Thị Tình",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Mẫn",
                    "alias": "Phúc Hữu",
                    "anniversary": "9-11"
                  },
                  "wife": {
                    "name": "Lê Thị Tình",
                    "anniversary": "29-8"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_ton",
              "name": "Bà Nguyễn Thị Tọn",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tọn"
              },
              "children": [
                {
                  "id": "gen5_nguyen_thi_thoai",
                  "name": "Bà Nguyễn Thị Thoại",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Thoại"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_to",
              "name": "Bà Nguyễn Thị Tỏ",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tỏ"
              },
              "children": [
                {
                  "id": "gen5_nguyen_thi_thai",
                  "name": "Bà Nguyễn Thị Thái",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Thái"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_thuy",
              "name": "Nguyễn Văn Thủy & Nguyễn Thị Túy",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Thủy",
                "anniversary": "12-8"
              },
              "wife": {
                "name": "Nguyễn Thị Túy",
                "anniversary": "29-8"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_quang",
                  "name": "Nguyễn Văn Quang & Nguyễn Thị Bổng",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Quang"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Bổng"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_khai",
          "name": "Nguyễn Văn Khải & Phùng Thị Bằng",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Khải",
            "title": "Cụ Ông"
          },
          "wife": {
            "name": "Phùng Thị Bằng",
            "title": "Cụ Bà",
            "anniversary": "20-5"
          },
          "children": [
            {
              "id": "gen4_nguyen_thi_cuc",
              "name": "Bà Nguyễn Thị Cúc",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Cúc"
              }
            },
            {
              "id": "gen4_vo_cong_thu_phu",
              "name": "Vợ ông Công Thù Phú",
              "generation": 4,
              "wife": {
                "name": "Vợ ông Công Thù Phú"
              }
            },
            {
              "id": "gen4_nguyen_van_luan",
              "name": "Nguyễn Văn Luận & Phùng Thị Thảo",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Luận",
                "anniversary": "29-4"
              },
              "wife": {
                "name": "Phùng Thị Thảo",
                "alias": "Bà Thạo",
                "anniversary": "14-4"
              },
              "children": [
                {
                  "id": "gen5_luan_quang",
                  "name": "Nguyễn Văn Quang & Nguyễn Thị Bổng",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Quang"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Bổng"
                  },
                  "notes": "Giỗ: 8-10"
                },
                {
                  "id": "gen5_luan_tuyet",
                  "name": "Bà Nguyễn Thị Tuyết",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Tuyết"
                  }
                },
                {
                  "id": "gen5_luan_bien",
                  "name": "Nguyễn Văn Biên & Nguyễn Thị Thái",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Biên"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Thái"
                  }
                },
                {
                  "id": "gen5_luan_cuc",
                  "name": "Bà Nguyễn Thị Cúc (chết trẻ)",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Cúc",
                    "notes": "Chết trẻ"
                  }
                },
                {
                  "id": "gen5_luan_hai",
                  "name": "Nguyễn Văn Hải (Hùng)",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Hải",
                    "alias": "Hùng"
                  }
                },
                {
                  "id": "gen5_luan_tho",
                  "name": "Nguyễn Văn Thọ",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Văn Thọ"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_ty",
              "name": "Bà Nguyễn Thị Tý (Bà Thạo)",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Tý",
                "alias": "Bà Thạo"
              }
            },
            {
              "id": "gen4_nguyen_van_dien_early",
              "name": "Nguyễn Văn Điền (chết trẻ)",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Điền",
                "notes": "Chết trẻ"
              }
            },
            {
              "id": "gen4_nguyen_van_bien",
              "name": "Nguyễn Văn Biên & Nguyễn Thị Thái",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Văn Biên",
                "anniversary": "8-3"
              },
              "wife": {
                "name": "Nguyễn Thị Thái"
              },
              "children": [
                {
                  "id": "gen5_bien_thao",
                  "name": "Bà Nguyễn Thị Thảo (Hằng) & Chồng",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Thảo",
                    "alias": "Hằng"
                  },
                  "husband": {
                    "name": "Họ Hữu (Thanh)"
                  }
                },
                {
                  "id": "gen5_bien_com",
                  "name": "Bà Nguyễn Thị Com",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Com"
                  }
                },
                {
                  "id": "gen5_bien_hao",
                  "name": "Bà Nguyễn Thị Hảo (Thái)",
                  "generation": 5,
                  "wife": {
                    "name": "Nguyễn Thị Hảo",
                    "alias": "Thái"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "gen2_nguyen_v_ngo",
      "name": "Nguyễn V Ngọ & Hiệu Diệu Giáp",
      "generation": 2,
      "husband": {
        "name": "Nguyễn V Ngọ",
        "title": "Cụ Ông",
        "alias": "Hiệu Phúc Núi",
        "anniversary": "23-12"
      },
      "wife": {
        "name": "Cụ Bà",
        "alias": "Hiệu Diệu Giáp",
        "anniversary": "4-1"
      },
      "notes": "Em trai: Nguyễn Công Hiệp, Phúc Thận, Giỗ: 24-8"
    },
    {
      "id": "gen2_nguyen_van_tu",
      "name": "Nguyễn Văn Tự & Phùng Thị Điệu",
      "generation": 2,
      "husband": {
        "name": "Nguyễn Văn Tự",
        "title": "Cụ Ông",
        "alias": "Hiệu Phúc Cận",
        "anniversary": "6-9"
      },
      "wife": {
        "name": "Phùng Thị Điệu",
        "title": "Cụ Bà",
        "alias": "Hiệu Diệu Tín",
        "anniversary": "9-5"
      }
    },
    {
      "id": "gen2_ly_thuc",
      "name": "Cụ Lý Thực",
      "generation": 2,
      "husband": {
        "name": "Cụ Lý Thực"
      }
    },
    {
      "id": "gen2_ly_van_gia",
      "name": "Cụ Bà Lý Văn (Gia) & Chồng họ Nguyễn Khắc",
      "generation": 2,
      "wife": {
        "name": "Cụ Bà Lý Văn",
        "alias": "Gia"
      },
      "husband": {
        "name": "Cụ Ông họ Nguyễn Khắc"
      },
      "children": [
        {
          "id": "gen3_khac_van",
          "name": "Nguyễn Khắc Văn",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Khắc Văn"
          },
          "children": [
            {
              "id": "gen4_khac_nghi",
              "name": "Nguyễn Khắc Nghị",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Khắc Nghị"
              },
              "children": [
                {
                  "id": "gen5_khac_thang",
                  "name": "Nguyễn Khắc Thắng",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Khắc Thắng"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_khac_sang",
          "name": "Nguyễn Khắc Sang",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Khắc Sang"
          },
          "children": [
            {
              "id": "gen4_khac_nghiem",
              "name": "Nguyễn Khắc Nghiêm",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Khắc Nghiêm"
              },
              "children": [
                {
                  "id": "gen5_khac_nghien",
                  "name": "Nguyễn Khắc Nghiên",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Khắc Nghiên"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_khac_nhung",
          "name": "Nguyễn Khắc Nhũng",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Khắc Nhũng"
          },
          "children": [
            {
              "id": "gen4_khac_nhuong",
              "name": "Nguyễn Khắc Nhượng",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Khắc Nhượng"
              },
              "children": [
                {
                  "id": "gen5_khac_luyen",
                  "name": "Nguyễn Khắc Luyện",
                  "generation": 5,
                  "husband": {
                    "name": "Nguyễn Khắc Luyện"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_kien_ba",
          "name": "Cụ Kiên Bá (Bà Cả) & Chồng họ Nguyễn Đình",
          "generation": 3,
          "wife": {
            "name": "Cụ Kiên Bá",
            "alias": "Bà Cả"
          },
          "husband": {
            "name": "Cụ Ông họ Nguyễn Đình"
          },
          "children": [
            {
              "id": "gen4_dinh_chi",
              "name": "Nguyễn Đình Chỉ & Vợ (Con ông Thường)",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Đình Chỉ"
              },
              "wife": {
                "name": "Ông Thường",
                "title": "Vợ"
              },
              "children": [
                { "id": "gen5_ly", "name": "Ô. Lý", "generation": 5, "husband": { "name": "Ô. Lý" } },
                { "id": "gen5_lang", "name": "Ô. Lãng", "generation": 5, "husband": { "name": "Ô. Lãng" } }
              ]
            },
            {
              "id": "gen4_dinh_ngoc",
              "name": "Nguyễn Đình Ngọc & Thân",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Đình Ngọc"
              },
              "wife": {
                "name": "Thân",
                "title": "Vợ"
              },
              "children": [
                { "id": "gen5_thach", "name": "Ô. Thạch", "generation": 5, "husband": { "name": "Ô. Thạch" } },
                { "id": "gen5_hien", "name": "Ô. Hiền", "generation": 5, "husband": { "name": "Ô. Hiền" } },
                { "id": "gen5_ngot", "name": "Ô. Ngọt", "generation": 5, "husband": { "name": "Ô. Ngọt" } },
                { "id": "gen5_mot", "name": "Ô. Mọt", "generation": 5, "husband": { "name": "Ô. Mọt" } },
                { "id": "gen5_thu_bong", "name": "Ô. Thu Bổng", "generation": 5, "husband": { "name": "Ô. Thu Bổng" } }
              ]
            },
            {
              "id": "gen4_dinh_nghi",
              "name": "Nguyễn Đình Nghị & Minh",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Đình Nghị"
              },
              "wife": {
                "name": "Minh",
                "title": "Vợ"
              },
              "children": [
                { "id": "gen5_duc", "name": "Ô. Đức", "generation": 5, "husband": { "name": "Ô. Đức" } },
                { "id": "gen5_tho_2", "name": "Ô. Thọ", "generation": 5, "husband": { "name": "Ô. Thọ" } },
                { "id": "gen5_loc", "name": "Ô. Lộc", "generation": 5, "husband": { "name": "Ô. Lộc" } },
                { "id": "gen5_thanh", "name": "B. Thanh", "generation": 5, "wife": { "name": "B. Thanh" } },
                { "id": "gen5_diep", "name": "B. Diệp", "generation": 5, "wife": { "name": "B. Diệp" } },
                { "id": "gen5_xan", "name": "B. Xan/Xanh", "generation": 5, "wife": { "name": "B. Xan/Xanh" } }
              ]
            },
            {
              "id": "gen4_dinh_nguyen",
              "name": "Nguyễn Đình Nguyện",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Đình Nguyện"
              }
            },
            {
              "id": "gen4_dinh_thi",
              "name": "Nguyễn Đình Thị",
              "generation": 4,
              "husband": {
                "name": "Nguyễn Đình Thị"
              },
              "children": [
                { "id": "gen5_tuoc", "name": "B. Tước", "generation": 5, "wife": { "name": "B. Tước" } },
                { "id": "gen5_danh", "name": "B. Đành", "generation": 5, "wife": { "name": "B. Đành" } },
                { "id": "gen5_thi_thuc", "name": "B. Thị Thực", "generation": 5, "wife": { "name": "B. Thị Thực" } },
                { "id": "gen5_phu", "name": "B. Phù", "generation": 5, "wife": { "name": "B. Phù" } },
                { "id": "gen5_lam", "name": "Ô. Làm", "generation": 5, "husband": { "name": "Ô. Làm" } }
              ]
            },
            {
              "id": "gen4_thi_gai",
              "name": "Nguyễn Thị Gái & Đoàn Nghịch",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Gái"
              },
              "husband": {
                "name": "Đoàn Nghịch"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "gen2_cai_con",
      "name": "Cụ Ông Cai Còn",
      "generation": 2,
      "husband": {
        "name": "Cai Còn",
        "title": "Cụ Ông"
      },
      "children": [
        {
          "id": "gen3_chanh_chuot",
          "name": "Bà Chành Chuột",
          "generation": 3,
          "wife": {
            "name": "Bà Chành Chuột"
          }
        },
        {
          "id": "gen3_diem_bim",
          "name": "Cụ Điệm Bím (Cụ ông Trại Choét)",
          "generation": 3,
          "wife": {
            "name": "Cụ Điệm Bím"
          },
          "husband": {
            "name": "Cụ ông Trại Choét"
          },
          "children": [
            {
              "id": "gen4_soan_nghich",
              "name": "Ông Soạn Nghịch",
              "generation": 4,
              "husband": {
                "name": "Ông Soạn Nghịch"
              }
            },
            {
              "id": "gen4_tra",
              "name": "Ông Trà & Nguyễn Thị Thê",
              "generation": 4,
              "husband": {
                "name": "Ông Trà"
              },
              "wife": {
                "name": "Nguyễn Thị Thê",
                "notes": "Quê quán: Ở Cầu Hai - Phú Thọ"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_lien",
          "name": "Nguyễn Văn Liên",
          "generation": 3,
          "husband": {
            "name": "Nguyễn Văn Liên"
          },
          "children": [
            {
              "id": "gen4_thi_thi",
              "name": "Bà Nguyễn Thị Thì & Chồng",
              "generation": 4,
              "wife": {
                "name": "Nguyễn Thị Thì",
                "notes": "Tiếp Lộn (Ở Con Trạm)"
              },
              "husband": {
                "name": "Ô. Cầu Hai - Phú Thọ"
              }
            },
            {
              "id": "gen4_tuoc_danh",
              "name": "Bà Tước, Bà Đành, Bà Thị Thực & Chồng",
              "generation": 4,
              "wife": {
                "name": "Bà Tước / Bà Đành / Bà Thị Thực",
                "notes": "Ở Con Trạm"
              },
              "husband": {
                "name": "Ô. Hùng Sơn Hùng - Tuyên Quang"
              }
            }
          ]
        },
        {
          "id": "gen3_tuyen_early",
          "name": "Bà Tuyên (chết trẻ)",
          "generation": 3,
          "wife": {
            "name": "Bà Tuyên",
            "notes": "Chết trẻ"
          }
        }
      ]
    }
  ]
};

// D3 Family Tree Visualizer Class
class FamilyTreeVisualizer {
  constructor(containerId, data) {
    this.container = document.getElementById(containerId);
    this.rawData = data;
    
    // Set Dimensions and layout configuration
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    
    this.cardWidth = 150;
    this.cardHeight = 180;
    this.levelSpacing = 440;
    this.nodeSpacing = 200;
    
    this.activeNodeId = null;
    this.searchQuery = "";
    this.compareTargetId = null;
    this.compareLcaId = null;
    this.rootNode = null; // D3 root
    this.nodesMap = {}; // Flat lookup map
    this.orientation = "horizontal"; // Default orientation: "horizontal" or "vertical"
    
    this.initD3();
    this.buildMap(this.rawData);
    this.initTree();
    this.setupResizeListener();
  }

  // Initialize the tree data structure for toggle functionality
  initTree() {
    this.rootNode = d3.hierarchy(this.rawData);
    this.rootNode.x0 = this.height / 2;
    this.rootNode.y0 = 0;
    
    // Collapse a node and all its children
    const collapse = (d) => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    };
    
    this.render(this.rootNode);
  }

  // Build a flat lookup map of all nodes for search and path calculations
  buildMap(node, parent = null) {
    this.nodesMap[node.id] = {
      ...node,
      parentId: parent ? parent.id : null
    };
    if (node.children) {
      node.children.forEach(child => this.buildMap(child, node));
    }
  }

  // Find direct path from root to node ID
  getLineagePath(nodeId) {
    const path = [];
    let currentId = nodeId;
    while (currentId) {
      const node = this.nodesMap[currentId];
      if (node) {
        path.unshift(node);
        currentId = node.parentId;
      } else {
        break;
      }
    }
    return path;
  }

  // Initialize D3 canvas elements
  initD3() {
    // Clear container
    this.container.innerHTML = "";
    
    // Create base SVG and outer group
    this.svg = d3.select(this.container)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("overflow", "hidden");
      
    this.gAll = this.svg.append("g").attr("class", "zoomable-canvas");
    
    // Setup Zoom and Pan behaviors
    this.zoom = d3.zoom()
      .scaleExtent([0.1, 3])
      .on("zoom", (event) => {
        this.gAll.attr("transform", event.transform);
      });
      
    this.svg.call(this.zoom);
    
    // Prevent zoom actions on double-clicks (we will handle it custom)
    this.svg.on("dblclick.zoom", null);
  }

  // Setup dynamic window resizing
  setupResizeListener() {
    window.addEventListener("resize", () => {
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
    });
  }

  // Render the D3 Tree Node Link Layout
  render(source) {
    const self = this;
    const duration = 400;
    const isHorizontal = this.orientation === "horizontal";
    
    // Spacing rules depending on orientation
    const levelSpacing = isHorizontal ? this.levelSpacing : (this.cardHeight + 100);
    const nodeSpacing = isHorizontal ? this.nodeSpacing : (this.cardWidth + 40);
    
    const treeLayout = d3.tree()
      .nodeSize([nodeSpacing, levelSpacing]);
      
    treeLayout(this.rootNode);
    
    // Get all nodes and links list
    const nodes = this.rootNode.descendants();
    const links = this.rootNode.links();
    
    // Adjust depth coordinate for layout levels
    nodes.forEach(d => {
      d.y = d.depth * levelSpacing + 100;
    });

    // Render Links with orthogonal step lines
    const linkGenerator = d => {
      const source = d.source;
      const target = d.target;
      const midY = (source.y + target.y) / 2;
      return isHorizontal
        ? `M ${source.y} ${source.x} H ${midY} V ${target.x} H ${target.y}`
        : `M ${source.x} ${source.y} V ${midY} H ${target.x} V ${target.y}`;
    };
      
    const linkElements = this.gAll.selectAll("path.link")
      .data(links, d => d.target.data.id);
      
    // Enter links at the parent's previous position
    const linkEnter = linkElements.enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", d => {
        const o = {x: source.x0 !== undefined ? source.x0 : source.x, y: source.y0 !== undefined ? source.y0 : source.y};
        return linkGenerator({source: o, target: o});
      });
      
    // Transition links to their new position
    const linkUpdate = linkElements.merge(linkEnter);
    linkUpdate.transition()
      .duration(duration)
      .attr("class", d => {
        const isActive = this.activeNodeId && (
          this.isAncestorOf(d.target.data.id, this.activeNodeId) || 
          d.target.data.id === this.activeNodeId
        );
        const isCompareActive = this.compareTargetId && (
          this.isAncestorOf(d.target.data.id, this.compareTargetId) || 
          d.target.data.id === this.compareTargetId
        );
        let classes = "link";
        if (isActive) classes += " active";
        if (isCompareActive) classes += " compare-active";
        return classes;
      })
      .attr("d", linkGenerator);
      
    // Transition exiting links to the parent's new position
    linkElements.exit().transition()
      .duration(duration)
      .attr("d", d => {
        const o = {x: source.x, y: source.y};
        return linkGenerator({source: o, target: o});
      })
      .remove();

    // Render Nodes Groups
    const nodeElements = this.gAll.selectAll("g.node-group")
      .data(nodes, d => d.data.id);
      
    // Enter any new nodes at the parent's previous position.
    const nodeEnter = nodeElements.enter()
      .append("g")
      .attr("class", "node-group")
      .attr("transform", d => isHorizontal ? `translate(${source.y0 !== undefined ? source.y0 : source.y}, ${source.x0 !== undefined ? source.x0 : source.x})` : `translate(${source.x0 !== undefined ? source.x0 : source.x}, ${source.y0 !== undefined ? source.y0 : source.y})`)
      .style("opacity", 0)
      .on("click", (event, d) => {
        event.stopPropagation();
        this.selectNode(d.data.id);
      });
      
    // Add expand/collapse button
    nodeEnter.append("circle")
      .attr("class", "node-toggle-btn")
      .attr("cx", isHorizontal ? (this.cardWidth / 2 + 10) : 0)
      .attr("cy", isHorizontal ? 0 : (this.cardHeight / 2 + 10))
      .attr("r", 12)
      .style("fill", d => d._children ? "var(--accent-primary)" : "var(--bg-card)")
      .style("stroke", "var(--border-color)")
      .style("stroke-width", "2px")
      .style("cursor", "pointer")
      .style("display", d => (d.children || d._children) ? "block" : "none")
      .on("click", (event, d) => {
        event.stopPropagation();
        // Toggle children
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        this.render(d);
      });
      
    // Plus/Minus icon inside circle
    nodeEnter.append("text")
      .attr("class", "node-toggle-icon")
      .attr("x", isHorizontal ? (this.cardWidth / 2 + 10) : 0)
      .attr("y", isHorizontal ? 4 : (this.cardHeight / 2 + 14))
      .attr("text-anchor", "middle")
      .style("cursor", "pointer")
      .style("fill", d => d._children ? "#fff" : "var(--text-main)")
      .style("font-weight", "bold")
      .style("display", d => (d.children || d._children) ? "block" : "none")
      .text(d => d._children ? "+" : "-")
      .on("click", (event, d) => {
        event.stopPropagation();
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        this.render(d);
      });
      
    // Create node cards using SVG (safe and stable vertical cards)
    const cardHalfW = this.cardWidth / 2;
    const cardHalfH = this.cardHeight / 2;
    
    // Node Rectangle background
    nodeEnter.append("rect")
      .attr("class", "node-rect")
      .attr("x", -cardHalfW)
      .attr("y", -cardHalfH)
      .attr("width", this.cardWidth)
      .attr("height", this.cardHeight)
      .attr("rx", 6)
      .attr("ry", 6);
      
    // Node contents - Names & info
    const contentEnter = nodeEnter.append("g").attr("class", "node-content");
    
    // Husband Title
    contentEnter.append("text")
      .attr("class", "node-title husband-title")
      .attr("x", 0)
      .attr("y", d => {
        const hasBoth = d.data.husband && d.data.wife;
        return hasBoth ? -50 : -15;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.65rem")
      .attr("opacity", "0.8")
      .text(d => d.data.husband ? (d.data.husband.title || "Ông") : "");

    // Husband Name
    contentEnter.append("text")
      .attr("class", d => {
        const hasBoth = d.data.husband && d.data.wife;
        const isWifeDescendant = hasBoth && (d.data.id.includes("thi_") || d.data.id.includes("kien_ba"));
        return `node-title husband-name ${isWifeDescendant ? 'spouse' : 'bloodline'}`;
      })
      .attr("x", 0)
      .attr("y", d => {
        const hasBoth = d.data.husband && d.data.wife;
        return hasBoth ? -32 : 5;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.85rem")
      .text(d => {
        if (d.data.husband) {
          let name = d.data.husband.name;
          if (name.length > 20) name = name.substring(0, 18) + "..."; // prevent huge overflow
          return name;
        }
        return "";
      });
      
    // Divider line inside card (if joint)
    contentEnter.append("line")
      .attr("class", "node-divider")
      .attr("x1", -30)
      .attr("y1", -8)
      .attr("x2", 30)
      .attr("y2", -8)
      .style("display", d => (d.data.husband && d.data.wife) ? "block" : "none");
      
    // Wife Title
    contentEnter.append("text")
      .attr("class", "node-title wife-title")
      .attr("x", 0)
      .attr("y", d => {
        const hasBoth = d.data.husband && d.data.wife;
        return hasBoth ? 16 : -15;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.65rem")
      .attr("opacity", "0.8")
      .text(d => d.data.wife ? (d.data.wife.title || "Bà") : "");

    // Wife Name
    contentEnter.append("text")
      .attr("class", d => {
        const hasBoth = d.data.husband && d.data.wife;
        const isWifeDescendant = !hasBoth || (d.data.id.includes("thi_") || d.data.id.includes("kien_ba"));
        return `node-title wife-name ${isWifeDescendant ? 'bloodline' : 'spouse'}`;
      })
      .attr("x", 0)
      .attr("y", d => {
        const hasBoth = d.data.husband && d.data.wife;
        return hasBoth ? 34 : 5;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.85rem")
      .text(d => {
        if (d.data.wife) {
          let name = d.data.wife.name;
          if (name.length > 20) name = name.substring(0, 18) + "..."; // prevent huge overflow
          return name;
        }
        return "";
      });

    // Single Name/Notes fallback
    contentEnter.append("text")
      .attr("class", "node-title single-name")
      .attr("x", 0)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .attr("font-size", "0.8rem")
      .text(d => {
        if (!d.data.husband && !d.data.wife && d.data.notes) {
          let note = d.data.notes;
          if (note.length > 20) note = note.substring(0, 18) + "...";
          return note;
        }
        return "";
      });
      
    // Generation indicator label (small badge at the bottom)
    contentEnter.append("text")
      .attr("class", "node-desc")
      .attr("x", 0)
      .attr("y", cardHalfH - 12)
      .attr("text-anchor", "middle")
      .attr("font-size", "0.7rem")
      .attr("font-weight", "500")
      .text(d => `ĐỜI ${d.data.generation}`);

    // Update phase
    const mergedNode = nodeElements.merge(nodeEnter);
    
    mergedNode.transition()
      .duration(duration)
      .attr("transform", d => isHorizontal ? `translate(${d.y}, ${d.x})` : `translate(${d.x}, ${d.y})`)
      .style("opacity", 1);
      
    // Update toggle icons
    mergedNode.select(".node-toggle-btn")
      .attr("cx", isHorizontal ? (this.cardWidth / 2 + 10) : 0)
      .attr("cy", isHorizontal ? 0 : (this.cardHeight / 2 + 10))
      .style("fill", d => d._children ? "var(--accent-primary)" : "var(--bg-card)")
      .style("display", d => (d.children || d._children) ? "block" : "none");
    mergedNode.select(".node-toggle-icon")
      .attr("x", isHorizontal ? (this.cardWidth / 2 + 10) : 0)
      .attr("y", isHorizontal ? 4 : (this.cardHeight / 2 + 14))
      .style("fill", d => d._children ? "#fff" : "var(--text-main)")
      .style("display", d => (d.children || d._children) ? "block" : "none")
      .text(d => d._children ? "+" : "-");
      
    // Highlight states of rects
    mergedNode.select(".node-rect")
      .classed("selected", d => d.data.id === this.activeNodeId)
      .classed("search-highlight", d => this.searchQuery && this.nodeMatchesSearch(d.data));
      
    // Exit any old nodes
    const nodeExit = nodeElements.exit().transition()
      .duration(duration)
      .attr("transform", d => isHorizontal ? `translate(${source.y}, ${source.x})` : `translate(${source.x}, ${source.y})`)
      .style("opacity", 0)
      .remove();

    // Store the old positions for transition.
    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Initial Zoom layout positioning on load
    if (!this.initialZoomDone) {
      this.fitToScreen(0);
      this.initialZoomDone = true;
      
      // Hide loading spinner
      const loading = document.getElementById("loading-overlay");
      if (loading) {
        loading.style.opacity = 0;
        setTimeout(() => loading.remove(), 400);
      }
    }
  }

  // Quick helper to check if a node is an ancestor of target node
  isAncestorOf(ancestorId, targetId) {
    let current = this.nodesMap[targetId];
    while (current) {
      if (current.parentId === ancestorId) return true;
      current = this.nodesMap[current.parentId];
    }
    return false;
  }

  // Check if node data matches current search query
  nodeMatchesSearch(data) {
    if (!this.searchQuery) return false;
    const cleanSearch = this.searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const fieldsToSearch = [
      data.name,
      data.notes,
      data.husband ? data.husband.name : "",
      data.husband ? data.husband.alias : "",
      data.wife ? data.wife.name : "",
      data.wife ? data.wife.alias : ""
    ];
    
    return fieldsToSearch.some(field => {
      if (!field) return false;
      const cleanField = field.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return cleanField.includes(cleanSearch);
    });
  }

  // Node Selection Logic
  selectNode(nodeId, openSidebar = true) {
    this.activeNodeId = nodeId;
    this.compareTargetId = null;
    this.compareLcaId = null;
    
    // Render tree with selected highlight
    this.render(this.rootNode);
    
    // Focus & Center node in view
    this.centerOnNode(nodeId);
    
    // Open Details Sidebar if openSidebar is true
    if (openSidebar) {
      this.populateSidebar(nodeId);
    }
  }

  // Toggle orientation between Horizontal and Vertical
  toggleOrientation() {
    this.orientation = (this.orientation === "horizontal") ? "vertical" : "horizontal";
    this.render(this.rootNode);
    if (this.activeNodeId) {
      this.centerOnNode(this.activeNodeId);
    } else {
      this.fitToScreen();
    }
  }

  // Smoothly center the canvas viewport on target node coordinates
  centerOnNode(nodeId) {
    const node = this.rootNode.descendants().find(d => d.data.id === nodeId);
    if (!node) return;
    
    const isHorizontal = this.orientation === "horizontal";
    const isMobile = window.innerWidth <= 768;
    const isSidebarActive = document.getElementById("details-sidebar")?.classList.contains("active");
    const scale = isMobile ? 0.65 : 0.95;
    
    let x, y;
    if (isHorizontal) {
      const xOffset = (!isMobile && isSidebarActive) ? (- (this.cardWidth / 2) - 150) : 0;
      const yCenter = (isMobile && isSidebarActive) ? (this.height / 6) : (this.height / 2);
      x = this.width / 2 - node.y * scale + xOffset;
      y = yCenter - node.x * scale;
    } else {
      const xOffset = (!isMobile && isSidebarActive) ? -150 : 0;
      const yCenter = (isMobile && isSidebarActive) ? (this.height / 6) : (this.height / 2);
      x = this.width / 2 - node.x * scale + xOffset;
      y = yCenter - node.y * scale;
    }
    
    this.svg.transition()
      .duration(750)
      .call(
        this.zoom.transform,
        d3.zoomIdentity.translate(x, y).scale(scale)
      );
  }

  // Fit the whole tree structure into screen viewport bounds
  fitToScreen(duration = 750) {
    if (!this.rootNode) return;
    
    const nodes = this.rootNode.descendants();
    if (nodes.length === 0) return;
    
    const isHorizontal = this.orientation === "horizontal";
    let xMin, xMax, yMin, yMax;
    
    if (isHorizontal) {
      xMin = d3.min(nodes, d => d.y) - this.levelSpacing / 2;
      xMax = d3.max(nodes, d => d.y) + this.levelSpacing / 2;
      yMin = d3.min(nodes, d => d.x) - this.nodeSpacing / 2;
      yMax = d3.max(nodes, d => d.x) + this.nodeSpacing / 2;
    } else {
      const vNodeSpacing = this.cardWidth + 40;
      const vLevelSpacing = this.cardHeight + 100;
      xMin = d3.min(nodes, d => d.x) - vNodeSpacing / 2;
      xMax = d3.max(nodes, d => d.x) + vNodeSpacing / 2;
      yMin = d3.min(nodes, d => d.y) - vLevelSpacing / 2;
      yMax = d3.max(nodes, d => d.y) + vLevelSpacing / 2;
    }
    
    const treeW = xMax - xMin;
    const treeH = yMax - yMin;
    
    const isMobile = window.innerWidth <= 768;
    const margin = isMobile ? 24 : 80;
    const availableW = this.width - margin;
    const availableH = this.height - margin;
    
    const scale = Math.min(availableW / treeW, availableH / treeH, 1);
    
    const x = this.width / 2 - (xMin + treeW / 2) * scale;
    const y = this.height / 2 - (yMin + treeH / 2) * scale;
    
    const trans = d3.zoomIdentity.translate(x, y).scale(scale);
    
    if (duration > 0) {
      this.svg.transition().duration(duration).call(this.zoom.transform, trans);
    } else {
      this.svg.call(this.zoom.transform, trans);
    }
  }

  // Get solar Date for year 2026 based on Lunar day and month
  getSolarDate2026(lunarDay, lunarMonth) {
    const monthStarts = {
      1: new Date(2026, 1, 17),  // Feb 17
      2: new Date(2026, 2, 18),  // Mar 18
      3: new Date(2026, 3, 17),  // Apr 17
      4: new Date(2026, 4, 16),  // May 16
      5: new Date(2026, 5, 15),  // Jun 15
      6: new Date(2026, 6, 14),  // Jul 14
      7: new Date(2026, 7, 13),  // Aug 13
      8: new Date(2026, 8, 11),  // Sep 11
      9: new Date(2026, 9, 11),  // Oct 11
      10: new Date(2026, 10, 9),  // Nov 9
      11: new Date(2026, 11, 9),  // Dec 9
      12: new Date(2027, 0, 8)    // Jan 8, 2027
    };
    
    const start = monthStarts[lunarMonth];
    if (!start) return null;
    
    const solarDate = new Date(start);
    solarDate.setDate(start.getDate() + (lunarDay - 1));
    return solarDate;
  }

  // Populate Slide-out Sidebar Panel
  populateSidebar(nodeId) {
    const node = this.nodesMap[nodeId];
    if (!node) return;
    
    const sidebar = document.getElementById("details-sidebar");
    sidebar.classList.add("active");
    
    // Set Badge and Name headers
    document.getElementById("sidebar-gen-badge").innerText = `Đời ${node.generation}`;
    document.getElementById("sidebar-name").innerText = node.name;
    document.getElementById("sidebar-notes").innerText = node.notes || "Không có ghi chú thêm.";
    
    // Spouse Card Section
    const spouseSection = document.getElementById("spouse-section");
    const spouseName = document.getElementById("spouse-name");
    const spouseDetails = document.getElementById("spouse-details");
    
    if (node.husband && node.wife) {
      spouseSection.style.display = "block";
      const isWifeDescendant = node.id.includes("thi_") || node.id.includes("kien_ba");
      const spouse = isWifeDescendant ? node.husband : node.wife;
      const spouseTitleDefault = isWifeDescendant ? "Cụ Ông" : "Cụ Bà";
      
      spouseName.innerText = `Kết hôn: ${spouse.name}`;
      spouseDetails.innerHTML = `
        <strong>Vai vế:</strong> ${spouse.title || spouseTitleDefault}<br>
        ${spouse.alias ? `<strong>Hiệu:</strong> ${spouse.alias}<br>` : ""}
        ${spouse.notes ? `<strong>Ghi chú:</strong> ${spouse.notes}<br>` : ""}
        ${spouse.anniversary ? `<strong>Ngày giỗ:</strong> ${spouse.anniversary}` : ""}
      `;
    } else if (node.husband && !node.wife) {
      spouseSection.style.display = "none";
    } else if (!node.husband && node.wife) {
      spouseSection.style.display = "block";
      spouseName.innerText = `Kết hôn: Chưa rõ`;
      spouseDetails.innerText = "Thông tin chi tiết chưa được ghi nhận đầy đủ.";
    } else {
      spouseSection.style.display = "none";
    }
    
    // Anniversary Section
    const annHighlight = document.getElementById("anniversary-details");
    annHighlight.innerHTML = "";
    let hasAnniversary = false;
    
    const formatAnniversary = (label, member) => {
      if (!member || !member.anniversary) return null;
      const parts = member.anniversary.split("-");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      
      const solarDate = this.getSolarDate2026(day, month);
      let solarText = "";
      let calendarLink = "";
      
      if (solarDate) {
        const dStr = String(solarDate.getDate()).padStart(2, '0');
        const mStr = String(solarDate.getMonth() + 1).padStart(2, '0');
        const yStr = solarDate.getFullYear();
        solarText = `<span class="solar-date-note"><i class="fa-regular fa-sun"></i> Dương lịch 2026: ${dStr}-${mStr}-${yStr}</span>`;
        
        // Google Calendar Link format: YYYYMMDD
        const startStr = `${yStr}${mStr}${dStr}`;
        const endDay = new Date(solarDate);
        endDay.setDate(solarDate.getDate() + 1);
        const endStr = `${endDay.getFullYear()}${String(endDay.getMonth() + 1).padStart(2, '0')}${String(endDay.getDate()).padStart(2, '0')}`;
        
        const eventTitle = encodeURIComponent(`Ngày Giỗ ${member.name} (${label})`);
        const eventDetails = encodeURIComponent(`Ngày giỗ âm lịch hàng năm: ${member.anniversary}\nDương lịch năm nay (2026): ${dStr}-${mStr}-${yStr}`);
        const link = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startStr}/${endStr}&details=${eventDetails}`;
        calendarLink = `<a href="${link}" target="_blank" class="calendar-shortcut-btn" title="Thêm vào Google Calendar"><i class="fa-solid fa-calendar-plus"></i> Nhắc lịch</a>`;
      }
      
      const container = document.createElement("div");
      container.className = "anniversary-row-card";
      container.innerHTML = `
        <div class="ann-info-part">
          <strong>${label}:</strong> ngày giỗ ${member.anniversary} (Âm lịch)
          ${solarText ? `<br>${solarText}` : ""}
        </div>
        ${calendarLink ? `<div class="ann-action-part">${calendarLink}</div>` : ""}
      `;
      return container;
    };

    if (node.husband && node.husband.anniversary) {
      const card = formatAnniversary("Cụ Ông", node.husband);
      if (card) {
        annHighlight.appendChild(card);
        hasAnniversary = true;
      }
    }
    if (node.wife && node.wife.anniversary) {
      const card = formatAnniversary("Cụ Bà", node.wife);
      if (card) {
        annHighlight.appendChild(card);
        hasAnniversary = true;
      }
    }
    
    if (hasAnniversary) {
      document.getElementById("anniversary-section").style.display = "block";
    } else {
      document.getElementById("anniversary-section").style.display = "none";
    }
    
    // Children Section
    const childrenList = document.getElementById("children-list");
    childrenList.innerHTML = "";
    
    if (node.children && node.children.length > 0) {
      document.getElementById("children-section").style.display = "block";
      node.children.forEach(child => {
        const li = document.createElement("li");
        li.className = "child-item";
        
        let detailsText = `Đời ${child.generation}`;
        if (child.notes) {
          detailsText += ` • ${child.notes}`;
        }
        
        li.innerHTML = `
          <span class="child-item-name">${child.name}</span>
          <span class="child-item-info">${detailsText}</span>
        `;
        li.addEventListener("click", () => {
          this.selectNode(child.id);
        });
        childrenList.appendChild(li);
      });
    } else {
      document.getElementById("children-section").style.display = "none";
    }
    
    // Lineage Ancestors trail Section
    const trail = document.getElementById("ancestor-trail");
    trail.innerHTML = "";
    
    const path = this.getLineagePath(nodeId);
    // Exclude current node from lineage trail
    path.pop();
    
    if (path.length > 0) {
      document.getElementById("ancestors-section").style.display = "block";
      path.forEach(anc => {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "ancestor-trail-node";
        nodeDiv.innerText = `${anc.name} (Đời ${anc.generation})`;
        nodeDiv.addEventListener("click", () => {
          this.selectNode(anc.id);
        });
        trail.appendChild(nodeDiv);
      });
    } else {
      document.getElementById("ancestors-section").style.display = "none";
    }

    // --- Compare Seniority Section ---
    const compareSearchInput = document.getElementById("compare-search-input");
    const compareDropdownList = document.getElementById("compare-dropdown-list");
    const compareContainer = document.getElementById("compare-searchable-select");
    const compareResult = document.getElementById("compare-result");
    
    // Reset values
    compareSearchInput.value = "";
    compareDropdownList.innerHTML = "";
    compareResult.innerHTML = "";
    compareContainer.classList.remove("active");
    
    // Find all other members and sort them by generation
    const allMembers = Object.values(this.nodesMap)
      .filter(m => m.id !== nodeId)
      .sort((a, b) => a.generation - b.generation || a.name.localeCompare(b.name));
      
    // Populate options
    const populateOptions = (filterText = "") => {
      compareDropdownList.innerHTML = "";
      const filtered = allMembers.filter(m => {
        if (!filterText) return true;
        const cleanFilter = filterText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const cleanName = m.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return cleanName.includes(cleanFilter) || `doi ${m.generation}`.includes(cleanFilter);
      });
      
      if (filtered.length === 0) {
        const div = document.createElement("div");
        div.className = "select-option no-result";
        div.innerText = "Không tìm thấy thành viên";
        compareDropdownList.appendChild(div);
        return;
      }
      
      filtered.forEach(member => {
        const div = document.createElement("div");
        div.className = "select-option";
        div.innerText = `Đời ${member.generation} - ${member.name}`;
        
        div.onclick = (e) => {
          e.stopPropagation();
          compareSearchInput.value = `Đời ${member.generation} - ${member.name}`;
          compareContainer.classList.remove("active");
          
          // Trigger comparison
          const res = this.getRelationship(nodeId, member.id);
          this.compareTargetId = member.id;
          this.compareLcaId = res.lcaId;
          this.render(this.rootNode);
          
          compareResult.innerHTML = `
            <div class="compare-card">
              <p class="compare-heading">Vai vế của <strong>${res.nameA}</strong> đối với <strong>${res.nameB}</strong>:</p>
              <div class="compare-badge">${res.rel}</div>
              <p class="compare-desc">${res.details}</p>
            </div>
          `;
        };
        
        compareDropdownList.appendChild(div);
      });
    };
    
    populateOptions();
    
    // Toggle dropdown visibility
    compareSearchInput.onfocus = () => {
      compareContainer.classList.add("active");
      populateOptions(compareSearchInput.value);
    };
    
    compareSearchInput.oninput = (e) => {
      populateOptions(e.target.value);
    };
    
    // Close dropdown on click outside
    const outsideClickListener = (e) => {
      if (!compareContainer.contains(e.target)) {
        compareContainer.classList.remove("active");
      }
    };
    document.addEventListener("click", outsideClickListener);
    
    if (this.compareOutsideClickListener) {
      document.removeEventListener("click", this.compareOutsideClickListener);
    }
    this.compareOutsideClickListener = outsideClickListener;
  }

  // Get seniority relationship description between A and B
  getRelationship(nodeIdA, nodeIdB) {
    if (nodeIdA === nodeIdB) return { nameA: "", nameB: "", rel: "Bản thân", details: "" };
    
    const pathA = this.getLineagePath(nodeIdA);
    const pathB = this.getLineagePath(nodeIdB);
    
    let lca = null;
    let lcaIdx = 0;
    while (lcaIdx < pathA.length && lcaIdx < pathB.length && pathA[lcaIdx].id === pathB[lcaIdx].id) {
      lca = pathA[lcaIdx];
      lcaIdx++;
    }
    
    if (!lca) return { nameA: "", nameB: "", rel: "Không rõ", details: "Khác nguồn gốc dòng họ." };
    
    const d1 = pathA.length - lcaIdx; // depth of A from LCA
    const d2 = pathB.length - lcaIdx; // depth of B from LCA
    
    const c1 = d1 > 0 ? pathA[lcaIdx] : null;
    const c2 = d2 > 0 ? pathB[lcaIdx] : null;
    
    let branchIsOlder = false;
    const lcaD3Node = this.rootNode.descendants().find(d => d.data.id === lca.id);
    if (lcaD3Node && lcaD3Node.children) {
      const idx1 = c1 ? lcaD3Node.children.findIndex(child => child.data.id === c1.id) : -1;
      const idx2 = c2 ? lcaD3Node.children.findIndex(child => child.data.id === c2.id) : -1;
      if (idx1 !== -1 && idx2 !== -1) {
        branchIsOlder = idx1 < idx2;
      }
    }
    
    const getBloodlineName = (node) => {
      if (!node) return "";
      if (node.husband && node.wife) {
        if (node.husband.name.startsWith("Nguyễn") || node.husband.name.includes("Văn") || node.husband.name.startsWith("Ô.")) {
          return node.husband.name;
        }
        return node.wife.name;
      }
      return node.husband ? node.husband.name : (node.wife ? node.wife.name : node.name);
    };
    
    const nameA = getBloodlineName(this.nodesMap[nodeIdA]);
    const nameB = getBloodlineName(this.nodesMap[nodeIdB]);
    
    let rel = "";
    let desc = `Cùng chung tổ tiên là <strong>${lca.name}</strong>. `;
    
    if (d1 === 0) { // A is direct ancestor of B
      if (d2 === 1) rel = "Cha/Mẹ";
      else if (d2 === 2) rel = "Ông/Bà";
      else if (d2 === 3) rel = "Cụ/Cố";
      else rel = "Tổ tiên";
      desc += `<strong>${nameA}</strong> thuộc đời trước trực hệ của <strong>${nameB}</strong>.`;
    } 
    else if (d2 === 0) { // A is direct descendant of B
      if (d1 === 1) rel = "Con";
      else if (d1 === 2) rel = "Cháu";
      else if (d1 === 3) rel = "Chắt";
      else rel = "Hậu duệ";
      desc += `<strong>${nameA}</strong> thuộc đời sau trực hệ của <strong>${nameB}</strong>.`;
    } 
    else if (d1 === 1 && d2 === 1) { // Siblings
      rel = branchIsOlder ? "Anh/Chị" : "Em";
      desc += `Cả hai là anh em ruột (cùng bố mẹ).`;
    } 
    else if (d1 === 1 && d2 > 1) { // A is sibling of B's ancestor
      const isFemale = !!this.nodesMap[nodeIdA].wife && !this.nodesMap[nodeIdA].husband;
      if (d2 === 2) {
        rel = isFemale ? "Cô" : (branchIsOlder ? "Bác" : "Chú");
      } else if (d2 === 3) {
        rel = isFemale ? "Cụ Cô" : (branchIsOlder ? "Cụ Bác" : "Cụ Chú");
      } else {
        rel = "Ông/Bà họ (Đời trên)";
      }
      desc += `<strong>${nameA}</strong> thuộc vai đời trên trong dòng họ.`;
    } 
    else if (d1 > 1 && d2 === 1) { // A is descendant of B's sibling
      if (d1 === 2) rel = "Cháu";
      else if (d1 === 3) rel = "Chắt";
      else rel = "Hậu duệ";
      desc += `<strong>${nameA}</strong> gọi <strong>${nameB}</strong> bằng ${d1 === 2 ? "Chú/Bác/Cô" : "Cụ"}.`;
    } 
    else { // Cousins
      const diff = d2 - d1;
      if (diff === 0) {
        rel = branchIsOlder ? "Anh/Chị họ" : "Em họ";
        desc += `Cả hai cùng thế hệ. Nhánh của <strong>${nameA}</strong> là cành trên (trưởng) so với nhánh của <strong>${nameB}</strong>.`;
      } else if (diff === 1) {
        const isFemale = !!this.nodesMap[nodeIdA].wife && !this.nodesMap[nodeIdA].husband;
        rel = isFemale ? "Cô họ" : (branchIsOlder ? "Bác họ" : "Chú họ");
        desc += `<strong>${nameA}</strong> thuộc vai lớn hơn một thế hệ (ngang vai bố mẹ B).`;
      } else if (diff === -1) {
        rel = "Cháu họ";
        desc += `<strong>${nameA}</strong> thuộc vai nhỏ hơn một thế hệ (ngang vai con B).`;
      } else if (diff === 2) {
        rel = "Ông/Bà họ";
        desc += `<strong>${nameA}</strong> thuộc vai lớn hơn hai thế hệ (ngang vai ông bà B).`;
      } else if (diff === -2) {
        rel = "Chắt họ";
        desc += `<strong>${nameA}</strong> thuộc vai nhỏ hơn hai thế hệ.`;
      } else if (diff > 2) {
        rel = "Cụ họ";
      } else {
        rel = "Hậu duệ họ";
      }
    }
    
    return {
      nameA,
      nameB,
      rel,
      details: desc,
      lcaId: lca.id
    };
  }

  // Zoom wrapper calls
  zoomIn() {
    this.svg.transition().duration(300).call(this.zoom.scaleBy, 1.3);
  }
  
  zoomOut() {
    this.svg.transition().duration(300).call(this.zoom.scaleBy, 1 / 1.3);
  }
  
  // Set Search query
  setSearch(query) {
    this.searchQuery = query;
    this.render();
  }
}

// Instantiate and configure visualizer on page load
document.addEventListener("DOMContentLoaded", () => {
  const visualizer = new FamilyTreeVisualizer("tree-container", familyData);
  
  // Focus and highlight the first node (root node) on load without opening sidebar
  if (visualizer.rootNode && visualizer.rootNode.data.id) {
    setTimeout(() => {
      visualizer.selectNode(visualizer.rootNode.data.id, false);
    }, 300);
  }
  
  // Setup Theme Switcher
  const themeToggle = document.getElementById("btn-theme-toggle");
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
  
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Setup Toolbar Zoom buttons
  document.getElementById("btn-zoom-in").addEventListener("click", () => visualizer.zoomIn());
  document.getElementById("btn-zoom-out").addEventListener("click", () => visualizer.zoomOut());
  document.getElementById("btn-zoom-fit").addEventListener("click", () => visualizer.fitToScreen());
  
  // Setup Floating Rotate Tree button
  const rotateBtn = document.getElementById("btn-rotate-tree");
  if (rotateBtn) {
    rotateBtn.addEventListener("click", () => {
      visualizer.toggleOrientation();
    });
  }
  
  // Setup Sidebar close button
  document.getElementById("btn-close-sidebar").addEventListener("click", () => {
    document.getElementById("details-sidebar").classList.remove("active");
    visualizer.activeNodeId = null;
    visualizer.render();
  });
  
  // Setup Search functions
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchResults = document.getElementById("search-results");
  
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    visualizer.setSearch(val);
    
    if (val.length > 0) {
      clearSearchBtn.style.display = "flex";
      showSearchResults(val, visualizer);
    } else {
      clearSearchBtn.style.display = "none";
      searchResults.style.display = "none";
    }
  });
  
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    searchResults.style.display = "none";
    visualizer.setSearch("");
  });
  
  // Close search dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      searchResults.style.display = "none";
    }
  });

  // Filter and show matching results in dropdown list
  function showSearchResults(query, treeVis) {
    const matches = [];
    const cleanQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    Object.values(treeVis.nodesMap).forEach(node => {
      const matchName = node.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
      const matchHusband = node.husband && node.husband.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
      const matchWife = node.wife && node.wife.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
      const matchAlias = (node.husband && node.husband.alias && node.husband.alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery)) ||
                          (node.wife && node.wife.alias && node.wife.alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery));
      
      if (matchName || matchHusband || matchWife || matchAlias) {
        matches.push(node);
      }
    });
    
    if (matches.length > 0) {
      searchResults.innerHTML = "";
      searchResults.style.display = "flex";
      
      // Limit to 8 matches for speed
      matches.slice(0, 8).forEach(node => {
        const div = document.createElement("div");
        div.className = "search-item";
        div.innerHTML = `
          <span class="search-item-name">${node.name}</span>
          <span class="search-item-info">Đời ${node.generation} ${node.notes ? `• ${node.notes.substring(0, 30)}` : ""}</span>
        `;
        div.addEventListener("click", () => {
          treeVis.selectNode(node.id);
          searchResults.style.display = "none";
        });
        searchResults.appendChild(div);
      });
    } else {
      searchResults.style.display = "none";
    }
  }
});
