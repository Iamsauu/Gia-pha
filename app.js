// Embedded Family Tree Data to avoid CORS issues when run via file:// protocol
const familyData = {
  "id": "root_ancestor",
  "name": "Nguyễn Công Tự & Lê Hiệu Diệu Long",
  "generation": 1,
  "bloodline": "husband",
  "source": "1:1.01",
  "husband": {
    "name": "Nguyễn Công Tự",
    "title": "Cụ Ông",
    "alias": "Hiệu Phúc Ngôn",
    "anniversary": "16-12"
  },
  "wife": {
    "name": "Lê Hiệu Diệu Long",
    "title": "Cụ Bà",
    "anniversary": "28-6"
  },
  "notes": "Cụ Tổ Chi (Trưởng chi: Nguyễn Văn Hỗ)",
  "children": [
    {
      "id": "gen2_nguyen_van_luong",
      "name": "Nguyễn Văn Lượng & Lê Thị Tân",
      "generation": 2,
      "bloodline": "husband",
      "source": "1:2.01",
      "husband": {
        "name": "Nguyễn Văn Lượng",
        "title": "Cụ Ông",
        "anniversary": "1-6"
      },
      "wife": {
        "name": "Lê Thị Tân",
        "title": "Cụ Bà",
        "anniversary": "24-7"
      },
      "children": [
        {
          "id": "gen3_nguyen_thi_luong",
          "name": "Nguyễn Văn Xuất & Nguyễn Thị Lượng",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.01",
          "husband": {
            "name": "Nguyễn Văn Xuất",
            "title": "Cụ Ông"
          },
          "wife": {
            "name": "Nguyễn Thị Lượng",
            "title": "Cụ Bà"
          },
          "children": [
            {
              "id": "gen4_trum_cach",
              "name": "Trùm Cách",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.01",
              "husband": {
                "name": "Trùm Cách",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_nhit",
                  "name": "Nguyễn Văn Nhít",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.01",
                  "husband": {
                    "name": "Nguyễn Văn Nhít",
                    "title": "Ông",
                    "alias": "Thìn"
                  }
                }
              ]
            },
            {
              "id": "gen4_sat",
              "name": "Sắt",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.02",
              "husband": {
                "name": "Sắt",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_xuoc",
                  "name": "Xược",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.02",
                  "husband": {
                    "name": "Xược",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_lieu",
                  "name": "Liệu",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.02",
                  "husband": {
                    "name": "Liệu",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_ban",
                  "name": "Bàn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.02",
                  "wife": {
                    "name": "Bàn",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_huy",
                  "name": "Huy",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.02",
                  "wife": {
                    "name": "Huy",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_gia",
              "name": "Giã",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.03",
              "husband": {
                "name": "Giã",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_tho",
                  "name": "Thọ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.03",
                  "husband": {
                    "name": "Thọ",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_tit",
                  "name": "Tít",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.03",
                  "husband": {
                    "name": "Tít",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_tuong",
              "name": "Tương",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.04",
              "husband": {
                "name": "Tương",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_tuy",
                  "name": "Tùy",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.04",
                  "husband": {
                    "name": "Tùy",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_ly_liem",
              "name": "Lý Liêm",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.05",
              "wife": {
                "name": "Lý Liêm",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_phung_dinh_tien",
                  "name": "Phùng Đình Tiến",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.05",
                  "husband": {
                    "name": "Phùng Đình Tiến",
                    "title": "Ông",
                    "alias": "Soạn Thể"
                  }
                }
              ]
            },
            {
              "id": "gen4_uan",
              "name": "Uẩn",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.06",
              "husband": {
                "name": "Uẩn",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_tuy_5_06",
                  "name": "Túy",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.06",
                  "husband": {
                    "name": "Túy",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_y",
                  "name": "Ý",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.06",
                  "husband": {
                    "name": "Ý",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_hoa",
                  "name": "Hòa",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.06",
                  "husband": {
                    "name": "Hòa",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_thuan_5_06",
                  "name": "Thuận",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.06",
                  "husband": {
                    "name": "Thuận",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_trong",
                  "name": "Trọng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.06",
                  "husband": {
                    "name": "Trọng",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_man",
              "name": "Măn",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.07",
              "husband": {
                "name": "Măn",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_lai",
                  "name": "Lai",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.07",
                  "husband": {
                    "name": "Lai",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_che",
                  "name": "Chế",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.07",
                  "wife": {
                    "name": "Chế",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_tich",
                  "name": "Tịch",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.07",
                  "wife": {
                    "name": "Tịch",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_yen",
                  "name": "Yên",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.07",
                  "wife": {
                    "name": "Yên",
                    "title": "Bà"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_hao",
          "name": "Nguyễn Văn Hào & Cụ Bà",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.02",
          "husband": {
            "name": "Nguyễn Văn Hào",
            "title": "Cụ Ông",
            "anniversary": "23-8"
          },
          "wife": {
            "name": "Cụ Bà",
            "title": "Cụ Bà",
            "anniversary": "28-12"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_luy",
              "name": "Nguyễn Văn Lũy",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.08",
              "husband": {
                "name": "Nguyễn Văn Lũy",
                "title": "Ông",
                "alias": "Trực Điền",
                "notes": "Mất lúc 12 tuổi"
              }
            },
            {
              "id": "gen4_nguyen_van_tuong",
              "name": "Nguyễn Văn Tường & Nguyễn Thị Liễn / Nguyễn Thị Hùy",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.09",
              "husband": {
                "name": "Nguyễn Văn Tường",
                "title": "Ông",
                "anniversary": "17-5"
              },
              "wife": {
                "name": "Nguyễn Thị Liễn / Nguyễn Thị Hùy",
                "title": "Bà",
                "notes": "Bà cả: Nguyễn Thị Liễn, giỗ 4-10. Bà hai: Nguyễn Thị Hùy."
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_ho",
                  "name": "Nguyễn Văn Hỗ & Nguyễn Thị Huấn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.08",
                  "husband": {
                    "name": "Nguyễn Văn Hỗ",
                    "title": "Ông"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Huấn",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_xuan",
              "name": "Nguyễn Văn Xuân",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.10",
              "husband": {
                "name": "Nguyễn Văn Xuân",
                "title": "Ông",
                "anniversary": "2-7"
              }
            },
            {
              "id": "gen4_phung_viet_lang",
              "name": "Phùng Viết Láng & Nguyễn Thị Tình",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.11",
              "husband": {
                "name": "Phùng Viết Láng",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Tình",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_phung_viet_vung",
                  "name": "Phùng Viết Vững & Hoa",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.09",
                  "husband": {
                    "name": "Phùng Viết Vững",
                    "title": "Ông"
                  },
                  "wife": {
                    "name": "Hoa",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_cu",
              "name": "Nguyễn Thị Cư",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.12",
              "wife": {
                "name": "Nguyễn Thị Cư",
                "title": "Bà",
                "alias": "Sư Ấu",
                "anniversary": "9-5"
              }
            },
            {
              "id": "gen4_nguyen_thi_tinh_con",
              "name": "Nguyễn Thị Tình Con",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.13",
              "wife": {
                "name": "Nguyễn Thị Tình Con",
                "title": "Bà",
                "anniversary": "14-1",
                "notes": "Mất trẻ"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_cuong",
          "name": "Nguyễn Văn Cường & Nguyễn Thị Bủng",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.03",
          "husband": {
            "name": "Nguyễn Văn Cường",
            "title": "Cụ Ông",
            "alias": "Hiệu Phúc Khang",
            "anniversary": "8-7"
          },
          "wife": {
            "name": "Nguyễn Thị Bủng",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Kiện",
            "anniversary": "23-4"
          },
          "children": [
            {
              "id": "gen4_ba_sat",
              "name": "Sắt Nguyễn Duy & Sắt",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.14",
              "husband": {
                "name": "Sắt Nguyễn Duy",
                "title": "Ông"
              },
              "wife": {
                "name": "Sắt",
                "title": "Bà"
              },
              "notes": "Đẻ tốp: ông Xược, ông Liệu, bà Bàn, bà Huy.",
              "children": [
                {
                  "id": "gen5_ba_sat_xuoc",
                  "name": "Xược",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:4.14",
                  "husband": {
                    "name": "Xược",
                    "title": "Ông"
                  },
                  "notes": "Con bà Sắt và ông Sắt Nguyễn Duy; được ghi trong ô đời 4, không có ô riêng ở đời 5."
                },
                {
                  "id": "gen5_ba_sat_lieu",
                  "name": "Liệu",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:4.14",
                  "husband": {
                    "name": "Liệu",
                    "title": "Ông"
                  },
                  "notes": "Con bà Sắt và ông Sắt Nguyễn Duy; được ghi trong ô đời 4, không có ô riêng ở đời 5."
                },
                {
                  "id": "gen5_ba_sat_ban",
                  "name": "Bàn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:4.14",
                  "wife": {
                    "name": "Bàn",
                    "title": "Bà"
                  },
                  "notes": "Con bà Sắt và ông Sắt Nguyễn Duy; được ghi trong ô đời 4, không có ô riêng ở đời 5."
                },
                {
                  "id": "gen5_ba_sat_huy",
                  "name": "Huy",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:4.14",
                  "wife": {
                    "name": "Huy",
                    "title": "Bà"
                  },
                  "notes": "Con bà Sắt và ông Sắt Nguyễn Duy; được ghi trong ô đời 4, không có ô riêng ở đời 5."
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_trang",
              "name": "Nguyễn Văn Tráng & Nguyễn Thị Dọn / Phùng Thị Đặc",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.15",
              "husband": {
                "name": "Nguyễn Văn Tráng",
                "title": "Ông",
                "anniversary": "14-5"
              },
              "wife": {
                "name": "Nguyễn Thị Dọn / Phùng Thị Đặc",
                "title": "Bà",
                "notes": "Bà cả: Nguyễn Thị Dọn, giỗ 30-10. Bà hai: Phùng Thị Đặc, giỗ 30-12."
              },
              "children": [
                {
                  "id": "gen5_tu",
                  "name": "Tu",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Tu",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_gong",
                  "name": "Gòng",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Gòng",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_canh",
                  "name": "Canh",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Canh",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_tu_xuyen",
                  "name": "Tư Xuyên",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Tư Xuyên",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_nam",
                  "name": "Năm",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Năm",
                    "title": "Bà",
                    "alias": "Don"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_luc",
                  "name": "Lục",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Lục",
                    "title": "Bà",
                    "alias": "Tích"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_bay",
                  "name": "Bảy",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Bảy",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_tam",
                  "name": "Tám",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Tám",
                    "title": "Bà",
                    "alias": "Ngà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_chin",
                  "name": "Chín",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.10",
                  "husband": {
                    "name": "Chín",
                    "title": "Ông"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_thau_dung",
                  "name": "Tháu Dung",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Tháu Dung",
                    "title": "Bà"
                  },
                  "notes": "Con riêng bà hai; PDF ghi trong nhóm con bà hai của Nguyễn Văn Tráng."
                },
                {
                  "id": "gen5_muoi",
                  "name": "Mười",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Mười",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_mon",
                  "name": "Mon",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.10",
                  "wife": {
                    "name": "Mon",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_nghiem",
                  "name": "Nghiêm",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.10",
                  "husband": {
                    "name": "Nghiêm",
                    "title": "Ông"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_dao",
                  "name": "Đào",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.10",
                  "husband": {
                    "name": "Đào",
                    "title": "Ông"
                  },
                  "notes": "Con bà hai."
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_lich",
              "name": "Nguyễn Văn Lịch & Phùng Thị Xoa",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.16",
              "husband": {
                "name": "Nguyễn Văn Lịch",
                "title": "Ông",
                "alias": "Hiệu Phúc Ngôn",
                "anniversary": "9-8"
              },
              "wife": {
                "name": "Phùng Thị Xoa",
                "title": "Bà",
                "alias": "Hiệu Diệu Tình",
                "anniversary": "23-7"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_sinh",
                  "name": "Nguyễn Văn Sinh & Nguyễn Thị Thiệp",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.11",
                  "husband": {
                    "name": "Nguyễn Văn Sinh",
                    "title": "Ông"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Thiệp",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_su",
              "name": "Nguyễn Văn Sự & Lê Thị Nhũn / Nguyễn Thị Út",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.17",
              "husband": {
                "name": "Nguyễn Văn Sự",
                "title": "Ông",
                "alias": "Hiệu Phúc Đạo",
                "anniversary": "28-6"
              },
              "wife": {
                "name": "Lê Thị Nhũn / Nguyễn Thị Út",
                "title": "Bà",
                "notes": "Bà cả: Lê Thị Nhũn, hiệu Diệu Tính, giỗ 26-12. Bà hai: Nguyễn Thị Út."
              },
              "children": [
                {
                  "id": "gen5_van",
                  "name": "Vạn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.12",
                  "wife": {
                    "name": "Vạn",
                    "title": "Bà",
                    "alias": "Nghiệp"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_the_lon",
                  "name": "Thế Lớn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.12",
                  "wife": {
                    "name": "Thế Lớn",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_the_con",
                  "name": "Thế Con",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.12",
                  "wife": {
                    "name": "Thế Con",
                    "title": "Bà"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_the",
                  "name": "Thể",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.12",
                  "husband": {
                    "name": "Thể",
                    "title": "Ông",
                    "notes": "Mất lúc 15 tuổi"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_mo",
                  "name": "Mô",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.12",
                  "husband": {
                    "name": "Mô",
                    "title": "Ông",
                    "notes": "Mất lúc 16 tuổi"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_cuc",
                  "name": "Cúc",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.12",
                  "wife": {
                    "name": "Cúc",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_hoa_5_12",
                  "name": "Hoa",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.12",
                  "wife": {
                    "name": "Hoa",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_vat",
          "name": "Nguyễn Văn Vật & Hoàng Thị Cần",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.04",
          "husband": {
            "name": "Nguyễn Văn Vật",
            "title": "Cụ Ông",
            "alias": "Hiệu Trực Thành",
            "anniversary": "23-8"
          },
          "wife": {
            "name": "Hoàng Thị Cần",
            "title": "Cụ Bà",
            "anniversary": "28-12"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_trung",
              "name": "Nguyễn Văn Thưởng",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.18",
              "husband": {
                "name": "Nguyễn Văn Thưởng",
                "title": "Ông",
                "alias": "Hiệu Trực Trân",
                "anniversary": "28-12"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_nghe",
                  "name": "Nguyễn Văn Lập",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.13",
                  "husband": {
                    "name": "Nguyễn Văn Lập",
                    "title": "Ông",
                    "anniversary": "8-2"
                  }
                },
                {
                  "id": "gen5_nguyen_van_nghiep",
                  "name": "Nguyễn Văn Nghiệp",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.13",
                  "husband": {
                    "name": "Nguyễn Văn Nghiệp",
                    "title": "Ông",
                    "anniversary": "14-3"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_luc",
          "name": "Nguyễn Văn Lực & Nguyễn Thị Cống",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.05",
          "husband": {
            "name": "Nguyễn Văn Lực",
            "title": "Cụ Ông",
            "alias": "Hiệu Phúc Tài",
            "anniversary": "12-2"
          },
          "wife": {
            "name": "Nguyễn Thị Cống",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Sức",
            "anniversary": "20-5"
          },
          "children": [
            {
              "id": "gen4_nguyen_thi_tin_lon",
              "name": "Kép Hoàn & Nguyễn Thị Tĩn Lớn",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.19",
              "husband": {
                "name": "Kép Hoàn",
                "title": "Ông",
                "notes": "Họ Phùng Minh"
              },
              "wife": {
                "name": "Nguyễn Thị Tĩn Lớn",
                "title": "Bà"
              }
            },
            {
              "id": "gen4_nguyen_thi_tin",
              "name": "Nguyễn Đình Kiên & Nguyễn Thị Tĩn Con",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.20",
              "husband": {
                "name": "Nguyễn Đình Kiên",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Tĩn Con",
                "title": "Bà",
                "notes": "Vợ bé"
              }
            },
            {
              "id": "gen4_nguyen_van_kinh_4_21",
              "name": "Nguyễn Văn Kỉnh & Nguyễn Thị Luyện",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.21",
              "husband": {
                "name": "Nguyễn Văn Kỉnh",
                "title": "Ông",
                "alias": "Thuần Vãng",
                "anniversary": "17-3"
              },
              "wife": {
                "name": "Nguyễn Thị Luyện",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_thinh",
                  "name": "Nguyễn Văn Thịnh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.14",
                  "husband": {
                    "name": "Nguyễn Văn Thịnh",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_luu_van_chiu",
              "name": "Lưu Văn Chiu & Nguyễn Thị Nhít",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.22",
              "husband": {
                "name": "Lưu Văn Chiu",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Nhít",
                "title": "Bà",
                "notes": "Vợ cả"
              },
              "children": [
                {
                  "id": "gen5_luu_thi_khang",
                  "name": "Lưu Thị Khang",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.15",
                  "wife": {
                    "name": "Lưu Thị Khang",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_luu_thi_thien",
                  "name": "Lưu Thị Thiện",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.15",
                  "wife": {
                    "name": "Lưu Thị Thiện",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_hoen",
              "name": "Nguyễn Văn Hoẻn & Phùng Thị Tý / Phùng Thị Bát",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.23",
              "husband": {
                "name": "Nguyễn Văn Hoẻn",
                "title": "Ông",
                "alias": "Hiệu Phúc Tấu",
                "anniversary": "7-3"
              },
              "wife": {
                "name": "Phùng Thị Tý / Phùng Thị Bát",
                "title": "Bà",
                "notes": "Bà cả: Phùng Thị Tý, hiệu Từ Y, giỗ 26-2. Bà hai: Phùng Thị Bát."
              },
              "children": [
                {
                  "id": "gen5_gai",
                  "name": "Nguyễn Thị Gái",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.16",
                  "wife": {
                    "name": "Nguyễn Thị Gái",
                    "title": "Bà",
                    "notes": "Mất lúc 16 tuổi"
                  },
                  "notes": "Con bà cả."
                },
                {
                  "id": "gen5_lam_san",
                  "name": "Sành Lớn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.16",
                  "wife": {
                    "name": "Sành Lớn",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_sanh_con",
                  "name": "Sành Con",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.16",
                  "wife": {
                    "name": "Sành Con",
                    "title": "Bà"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_thuy",
                  "name": "Thụ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.16",
                  "husband": {
                    "name": "Thụ",
                    "title": "Ông"
                  },
                  "notes": "Con bà hai."
                },
                {
                  "id": "gen5_thuan",
                  "name": "Thuận",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.16",
                  "husband": {
                    "name": "Thuận",
                    "title": "Ông"
                  },
                  "notes": "Con bà hai."
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_khuyen",
              "name": "Nguyễn Văn Khuyến & Lưu Thị Năng",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.24",
              "husband": {
                "name": "Nguyễn Văn Khuyến",
                "title": "Ông",
                "alias": "Hiệu Phúc Cần",
                "anniversary": "27-4"
              },
              "wife": {
                "name": "Lưu Thị Năng",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_tien",
                  "name": "Tiến",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.17",
                  "husband": {
                    "name": "Tiến",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_lan",
                  "name": "Lan",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.17",
                  "wife": {
                    "name": "Lan",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_hue",
                  "name": "Huệ",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.17",
                  "wife": {
                    "name": "Huệ",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_khanh",
                  "name": "Khánh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.17",
                  "husband": {
                    "name": "Khánh",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_chuong",
                  "name": "Chuông",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.17",
                  "wife": {
                    "name": "Chuông",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_ty_con",
              "name": "Nguyễn Thị Tý Con",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.25",
              "wife": {
                "name": "Nguyễn Thị Tý Con",
                "title": "Bà",
                "alias": "Hiệu Thục Thu",
                "notes": "Mất lúc 12 tuổi"
              }
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_thin",
          "name": "Nguyễn Văn Thìn",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.06",
          "husband": {
            "name": "Nguyễn Văn Thìn",
            "title": "Cụ Ông",
            "alias": "Trực Ngân",
            "anniversary": "4-5"
          }
        },
        {
          "id": "gen3_nguyen_van_ty",
          "name": "Nguyễn Văn Tý & Lê Thị Phúc",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.07",
          "husband": {
            "name": "Nguyễn Văn Tý",
            "title": "Cụ Ông",
            "alias": "Tẻo; Hiệu Phúc Tiêu",
            "anniversary": "2-7"
          },
          "wife": {
            "name": "Lê Thị Phúc",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Y",
            "anniversary": "8-8"
          },
          "children": [
            {
              "id": "gen4_nguyen_thi_bim",
              "name": "Nguyễn Văn Mùi & Nguyễn Thị Bĩm Con",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.26",
              "husband": {
                "name": "Nguyễn Văn Mùi",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Bĩm Con",
                "title": "Bà",
                "notes": "Vợ cả"
              },
              "children": [
                {
                  "id": "gen5_ta",
                  "name": "Trà",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.18",
                  "wife": {
                    "name": "Trà",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_ta_2",
                  "name": "Tá",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.18",
                  "wife": {
                    "name": "Tá",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_chan",
                  "name": "Chân",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.18",
                  "husband": {
                    "name": "Chân",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_khuyet_early",
              "name": "Nguyễn Văn Khuyết",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.27",
              "husband": {
                "name": "Nguyễn Văn Khuyết",
                "title": "Ông",
                "notes": "Chết trẻ"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "gen2_nguyen_v_ngo",
      "name": "Nguyễn Văn Ngọ & Cụ Bà",
      "generation": 2,
      "bloodline": "husband",
      "source": "1:2.02",
      "husband": {
        "name": "Nguyễn Văn Ngọ",
        "title": "Cụ Ông",
        "alias": "Hiệu Phúc Mùi",
        "anniversary": "23-12"
      },
      "wife": {
        "name": "Cụ Bà",
        "title": "Cụ Bà",
        "alias": "Hiệu Diệu Giáp",
        "anniversary": "4-1"
      },
      "notes": "Em trai: Nguyễn Văn Công, hiệu Phúc Thận, giỗ 24-8. PDF ghi chung trong ô của Nguyễn Văn Ngọ.",
      "children": [
        {
          "id": "gen3_nguyen_thi_ngo",
          "name": "Nguyễn Thị Ngọ",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.08",
          "wife": {
            "name": "Nguyễn Thị Ngọ",
            "title": "Cụ Bà"
          }
        },
        {
          "id": "gen3_nguyen_van_hy",
          "name": "Nguyễn Văn Hiếu & Nguyễn Thị Tập",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.09",
          "husband": {
            "name": "Nguyễn Văn Hiếu",
            "title": "Cụ Ông",
            "alias": "Hiệu Phúc Nghĩa",
            "anniversary": "3-7"
          },
          "wife": {
            "name": "Nguyễn Thị Tập",
            "title": "Cụ Bà",
            "alias": "Quang Lập",
            "anniversary": "13-12"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_tam",
              "name": "Nguyễn Văn Tâm & Đỗ Thị Lê",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.28",
              "husband": {
                "name": "Nguyễn Văn Tâm",
                "title": "Ông",
                "alias": "Hiệu Phúc Lương",
                "anniversary": "9-2"
              },
              "wife": {
                "name": "Đỗ Thị Lê",
                "title": "Bà",
                "alias": "Hiệu Tưu",
                "anniversary": "2-1"
              },
              "children": [
                {
                  "id": "gen5_nguyen_thi_thuan",
                  "name": "Nguyễn Văn Hòa & Nguyễn Thị Thuận",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.19",
                  "husband": {
                    "name": "Nguyễn Văn Hòa",
                    "title": "Ông"
                  },
                  "wife": {
                    "name": "Nguyễn Thị Thuận",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_tinh",
              "name": "Nguyễn Hữu Dương & Nguyễn Thị Tính",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.29",
              "husband": {
                "name": "Nguyễn Hữu Dương",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Tính",
                "title": "Bà",
                "anniversary": "21-9",
                "notes": "Vợ cả"
              },
              "children": [
                {
                  "id": "gen5_be",
                  "name": "Bệ",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.20",
                  "wife": {
                    "name": "Bệ",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_bi",
                  "name": "Bỉ",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.20",
                  "wife": {
                    "name": "Bỉ",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_do",
                  "name": "Đô",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.20",
                  "husband": {
                    "name": "Đô",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_dinh",
                  "name": "Đỉnh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.20",
                  "husband": {
                    "name": "Đỉnh",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_dong",
                  "name": "Đồng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.20",
                  "husband": {
                    "name": "Đồng",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_cam",
              "name": "Nguyễn Văn Cam & Lưu Thị Lớn",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.30",
              "husband": {
                "name": "Nguyễn Văn Cam",
                "title": "Ông",
                "alias": "Hiệu Phúc Kết",
                "anniversary": "22-6"
              },
              "wife": {
                "name": "Lưu Thị Lớn",
                "title": "Bà",
                "anniversary": "10-8"
              },
              "children": [
                {
                  "id": "gen5_nguyen_van_gu",
                  "name": "Nguyễn Văn Gụ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.21",
                  "husband": {
                    "name": "Nguyễn Văn Gụ",
                    "title": "Ông",
                    "anniversary": "8-5"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_man",
              "name": "Nguyễn Văn Mận & Lưu Thị Gái",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.31",
              "husband": {
                "name": "Nguyễn Văn Mận",
                "title": "Ông",
                "alias": "Hiệu Phúc Hưu",
                "anniversary": "9-11"
              },
              "wife": {
                "name": "Lưu Thị Gái",
                "title": "Bà",
                "alias": "Hiệu Diệu Quả",
                "anniversary": "23-5"
              },
              "children": [
                {
                  "id": "gen5_mo_5_22",
                  "name": "Mơ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.22",
                  "husband": {
                    "name": "Mơ",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_ty",
                  "name": "Tý",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.22",
                  "wife": {
                    "name": "Tý",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_sang",
                  "name": "Sáng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.22",
                  "husband": {
                    "name": "Sáng",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_mai",
                  "name": "Mai",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.22",
                  "wife": {
                    "name": "Mai",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_duong",
                  "name": "Đường",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.22",
                  "husband": {
                    "name": "Đường",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_dung",
                  "name": "Dũng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.22",
                  "husband": {
                    "name": "Dũng",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_tan",
              "name": "Nguyễn Hữu Dương & Nguyễn Thị Toán",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.32",
              "husband": {
                "name": "Nguyễn Hữu Dương",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Toán",
                "title": "Bà",
                "notes": "Vợ lẽ"
              },
              "children": [
                {
                  "id": "gen5_toan_dang",
                  "name": "Đang",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.23",
                  "wife": {
                    "name": "Đang",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_toan_hoa",
                  "name": "Hoa",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.23",
                  "wife": {
                    "name": "Hoa",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_toan_dang_sac",
                  "name": "Đáng",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.23",
                  "wife": {
                    "name": "Đáng",
                    "title": "Bà"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_quan",
          "name": "Nguyễn Văn Quận",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.10",
          "husband": {
            "name": "Nguyễn Văn Quận",
            "title": "Cụ Ông",
            "alias": "Trực Nghi",
            "anniversary": "8-10"
          }
        }
      ]
    },
    {
      "id": "gen2_nguyen_van_tu",
      "name": "Nguyễn Văn Tự & Phùng Thị Diệu",
      "generation": 2,
      "bloodline": "husband",
      "source": "1:2.03",
      "husband": {
        "name": "Nguyễn Văn Tự",
        "title": "Cụ Ông",
        "alias": "Hiệu Phúc Cẩn",
        "anniversary": "6-9"
      },
      "wife": {
        "name": "Phùng Thị Diệu",
        "title": "Cụ Bà",
        "alias": "Hiệu Diệu Tín",
        "anniversary": "9-5"
      },
      "children": [
        {
          "id": "gen3_nguyen_van_hieu",
          "name": "Nguyễn Văn Nhịu & Đỗ Thị",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.11",
          "husband": {
            "name": "Nguyễn Văn Nhịu",
            "title": "Cụ Ông",
            "alias": "Hiệu Phúc Điển",
            "anniversary": "20-1"
          },
          "wife": {
            "name": "Đỗ Thị",
            "title": "Cụ Bà",
            "alias": "Hiệu Diệu Nghĩa",
            "anniversary": "8-10"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_nhan",
              "name": "Nguyễn Văn Nhân & Bà Cả / Lưu Thị Tình",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.33",
              "husband": {
                "name": "Nguyễn Văn Nhân",
                "title": "Ông",
                "alias": "Hiệu Phúc Đạo",
                "anniversary": "21-1"
              },
              "wife": {
                "name": "Bà Cả / Lưu Thị Tình",
                "title": "Bà",
                "notes": "Bà cả: chưa rõ tên, giỗ 12-8. Bà hai: Lưu Thị Tình, giỗ 29-8."
              },
              "children": [
                {
                  "id": "gen5_duyen",
                  "name": "Duyên",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.24",
                  "husband": {
                    "name": "Duyên",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_le",
                  "name": "Lệ",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.24",
                  "wife": {
                    "name": "Lệ",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_lan_5_24",
                  "name": "Lẫn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.24",
                  "husband": {
                    "name": "Lẫn",
                    "title": "Ông",
                    "alias": "Trực Lợi",
                    "notes": "Chết trẻ lúc 12 tuổi"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_lon_4_34",
              "name": "Nguyễn Thị Lớn",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.34",
              "wife": {
                "name": "Nguyễn Thị Lớn",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_na",
                  "name": "Na",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.25",
                  "wife": {
                    "name": "Na",
                    "title": "Bà"
                  },
                  "notes": "Làng Mây; đẻ ra cô Dừa."
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_thoai",
              "name": "Nguyễn Thị Thoai",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.35",
              "wife": {
                "name": "Nguyễn Thị Thoai",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_hai",
                  "name": "Hải",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.26",
                  "wife": {
                    "name": "Hải",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_gai_5_26",
                  "name": "Gái",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.26",
                  "wife": {
                    "name": "Gái",
                    "title": "Bà",
                    "alias": "Đầu Đê"
                  }
                }
              ]
            },
            {
              "id": "gen4_thu_deo",
              "name": "Thủ Dẻo & Nguyễn Thị Tháu",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.36",
              "husband": {
                "name": "Thủ Dẻo",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Tháu",
                "title": "Bà",
                "notes": "Vợ hai"
              },
              "children": [
                {
                  "id": "gen5_thau_ty_con",
                  "name": "Tý Con",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.27",
                  "wife": {
                    "name": "Tý Con",
                    "title": "Bà",
                    "alias": "Được"
                  }
                },
                {
                  "id": "gen5_thau_bay",
                  "name": "Bẩy",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.27",
                  "wife": {
                    "name": "Bẩy",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_thau_tam",
                  "name": "Tám",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.27",
                  "wife": {
                    "name": "Tám",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_van_luan",
              "name": "Nguyễn Văn Luân & Phùng Thị Thìa",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.37",
              "husband": {
                "name": "Nguyễn Văn Luân",
                "title": "Ông",
                "anniversary": "29-4"
              },
              "wife": {
                "name": "Phùng Thị Thìa",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_ly_5_28",
                  "name": "Ly",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.28",
                  "wife": {
                    "name": "Ly",
                    "title": "Bà",
                    "alias": "Lai"
                  }
                },
                {
                  "id": "gen5_luan_ly",
                  "name": "Lý",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.28",
                  "husband": {
                    "name": "Lý",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_nu",
                  "name": "Nụ",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.28",
                  "wife": {
                    "name": "Nụ",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_luan_hoa",
                  "name": "Hòa",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.28",
                  "wife": {
                    "name": "Hòa",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_ty",
              "name": "Nguyễn Thị Tý",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.38",
              "wife": {
                "name": "Nguyễn Thị Tý",
                "title": "Bà",
                "alias": "Bà Thảo"
              },
              "children": [
                {
                  "id": "gen5_nhung",
                  "name": "Nhung",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.29",
                  "husband": {
                    "name": "Nhung",
                    "title": "Ông",
                    "alias": "Thu"
                  }
                },
                {
                  "id": "gen5_phuong",
                  "name": "Phương",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.29",
                  "wife": {
                    "name": "Phương",
                    "title": "Bà"
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
          "bloodline": "husband",
          "source": "1:3.12",
          "husband": {
            "name": "Nguyễn Văn Khải",
            "title": "Cụ Ông",
            "anniversary": "19-7"
          },
          "wife": {
            "name": "Phùng Thị Bằng",
            "title": "Cụ Bà",
            "anniversary": "20-5"
          },
          "children": [
            {
              "id": "gen4_nguyen_van_tich",
              "name": "Nguyễn Văn Tịch & Nguyễn Thị Cù",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.39",
              "husband": {
                "name": "Nguyễn Văn Tịch",
                "title": "Ông",
                "anniversary": "23-11"
              },
              "wife": {
                "name": "Nguyễn Thị Cù",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_mac",
                  "name": "Mạc",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.30",
                  "husband": {
                    "name": "Mạc",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_khai",
                  "name": "Khai",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.30",
                  "wife": {
                    "name": "Khai",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_mon_5_30",
                  "name": "Môn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.30",
                  "husband": {
                    "name": "Môn",
                    "title": "Ông",
                    "notes": "Mất lúc 19 tuổi"
                  }
                },
                {
                  "id": "gen5_tu_5_30",
                  "name": "Tư",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.30",
                  "wife": {
                    "name": "Tư",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_nam_5_30",
                  "name": "Năm",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.30",
                  "wife": {
                    "name": "Năm",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_sau",
                  "name": "Sáu",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.30",
                  "wife": {
                    "name": "Sáu",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_bay_5_30",
                  "name": "Bẩy",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.30",
                  "husband": {
                    "name": "Bẩy",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_thi_hoa_4_40",
              "name": "Nguyễn Thị Hoa",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.40",
              "wife": {
                "name": "Nguyễn Thị Hoa",
                "title": "Bà",
                "notes": "Chết trẻ"
              }
            },
            {
              "id": "gen4_nguyen_van_bien",
              "name": "Nguyễn Văn Điển & Nguyễn Thị Thái",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.41",
              "husband": {
                "name": "Nguyễn Văn Điển",
                "title": "Ông",
                "anniversary": "8-3"
              },
              "wife": {
                "name": "Nguyễn Thị Thái",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_nham",
                  "name": "Nham",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.31",
                  "wife": {
                    "name": "Nham",
                    "title": "Bà",
                    "notes": "Con nuôi"
                  }
                },
                {
                  "id": "gen5_tich_5_31",
                  "name": "Tích",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.31",
                  "husband": {
                    "name": "Tích",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_uoc",
                  "name": "Ước",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.31",
                  "husband": {
                    "name": "Ước",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_dao_5_31",
                  "name": "Đào",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.31",
                  "wife": {
                    "name": "Đào",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_lieu_5_31",
                  "name": "Liễu",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.31",
                  "wife": {
                    "name": "Liễu",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_khai_nguyen_thi_nhit",
              "name": "Nguyễn Hữu Chanh & Nguyễn Thị Nhít",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.42",
              "husband": {
                "name": "Nguyễn Hữu Chanh",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Nhít",
                "title": "Bà",
                "anniversary": "20-9"
              },
              "children": [
                {
                  "id": "gen5_hoan",
                  "name": "Hoan",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.32",
                  "wife": {
                    "name": "Hoan",
                    "title": "Bà",
                    "alias": "Phong"
                  }
                },
                {
                  "id": "gen5_nhan",
                  "name": "Nhàn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.32",
                  "husband": {
                    "name": "Nhàn",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_nha",
                  "name": "Nhã",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.32",
                  "husband": {
                    "name": "Nhã",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen5_bien_com",
              "name": "Nguyễn Văn Hạng & Nguyễn Thị Còm",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.43",
              "husband": {
                "name": "Nguyễn Văn Hạng",
                "title": "Ông"
              },
              "wife": {
                "name": "Nguyễn Thị Còm",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_hai_5_33",
                  "name": "Hải",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.33",
                  "husband": {
                    "name": "Hải",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_com_hoa",
                  "name": "Hòa",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.33",
                  "husband": {
                    "name": "Hòa",
                    "title": "Ông"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "gen2_ly_thuc",
      "name": "Cụ Lý Thúc",
      "generation": 2,
      "bloodline": "husband",
      "source": "1:2.04",
      "husband": {
        "name": "Cụ Lý Thúc",
        "title": "Cụ Ông"
      }
    },
    {
      "id": "gen2_ly_van_gia",
      "name": "Chồng họ Nguyễn Khắc & Lý Vân",
      "generation": 2,
      "bloodline": "wife",
      "source": "1:2.05",
      "husband": {
        "name": "Chồng họ Nguyễn Khắc",
        "title": "Cụ Ông"
      },
      "wife": {
        "name": "Lý Vân",
        "title": "Cụ Bà"
      },
      "notes": "Gái; lấy chồng họ Nguyễn Khắc.",
      "children": [
        {
          "id": "gen3_khac_van",
          "name": "Nguyễn Khắc Vân",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.13",
          "husband": {
            "name": "Nguyễn Khắc Vân",
            "title": "Cụ Ông"
          },
          "children": [
            {
              "id": "gen4_nguyen_khac_vy",
              "name": "Nguyễn Khắc Vy",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.44",
              "husband": {
                "name": "Nguyễn Khắc Vy",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_chi",
                  "name": "Chi",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.34",
                  "wife": {
                    "name": "Chi",
                    "title": "Bà",
                    "alias": "Hỗ"
                  }
                },
                {
                  "id": "gen5_ky",
                  "name": "Kỷ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.34",
                  "husband": {
                    "name": "Kỷ",
                    "title": "Ông"
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
          "bloodline": "husband",
          "source": "1:3.14",
          "husband": {
            "name": "Nguyễn Khắc Sang",
            "title": "Cụ Ông"
          },
          "children": [
            {
              "id": "gen4_nguyen_khac_truong",
              "name": "Nguyễn Khắc Trượng",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.45",
              "husband": {
                "name": "Nguyễn Khắc Trượng",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_dung_5_35",
                  "name": "Dụng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.35",
                  "husband": {
                    "name": "Dụng",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_ty_5_35",
                  "name": "Ty",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.35",
                  "husband": {
                    "name": "Ty",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_truong",
                  "name": "Trường",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.35",
                  "husband": {
                    "name": "Trường",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_ky_5_35",
                  "name": "Kỳ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.35",
                  "husband": {
                    "name": "Kỳ",
                    "title": "Ông"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_khac_nhung",
          "name": "Nguyễn Khắc Những",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.15",
          "husband": {
            "name": "Nguyễn Khắc Những",
            "title": "Cụ Ông"
          },
          "children": [
            {
              "id": "gen4_khac_nghiem",
              "name": "Nguyễn Khắc Nghiên",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.46",
              "husband": {
                "name": "Nguyễn Khắc Nghiên",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_ly",
                  "name": "Lý",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.36",
                  "husband": {
                    "name": "Lý",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_lang",
                  "name": "Lãng",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.36",
                  "husband": {
                    "name": "Lãng",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_khac_but",
              "name": "Nguyễn Khắc Bút",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.47",
              "husband": {
                "name": "Nguyễn Khắc Bút",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_chien",
                  "name": "Chiến",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.37",
                  "husband": {
                    "name": "Chiến",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_chanh",
                  "name": "Chanh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.37",
                  "husband": {
                    "name": "Chanh",
                    "title": "Ông"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_kien_ba",
          "name": "Kiên Bà",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.16",
          "wife": {
            "name": "Kiên Bà",
            "title": "Cụ Bà",
            "alias": "Bà Cả"
          },
          "children": [
            {
              "id": "gen4_dinh_chi",
              "name": "Nguyễn Đình Chí",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.48",
              "husband": {
                "name": "Nguyễn Đình Chí",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_chi_5_38",
                  "name": "Chi",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.38",
                  "husband": {
                    "name": "Chi",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_mien",
                  "name": "Miễn",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.38",
                  "wife": {
                    "name": "Miễn",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_kinh",
                  "name": "Kính",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.38",
                  "husband": {
                    "name": "Kính",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_vinh",
                  "name": "Vinh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.38",
                  "husband": {
                    "name": "Vinh",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_dinh_ngoc",
              "name": "Nguyễn Đình Ngọc",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.49",
              "husband": {
                "name": "Nguyễn Đình Ngọc",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_tan",
                  "name": "Tần",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.39",
                  "wife": {
                    "name": "Tần",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_thach",
                  "name": "Thạch",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.39",
                  "husband": {
                    "name": "Thạch",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_hien",
                  "name": "Hiển",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.39",
                  "husband": {
                    "name": "Hiển",
                    "title": "Ông"
                  },
                  "notes": "PDF có dấu chấm lửng giữa ông Thạch và ông Hiển; không tự bổ sung tên còn thiếu."
                }
              ]
            },
            {
              "id": "gen4_nguyen_dinh_duong",
              "name": "Nguyễn Đình Đường",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.50",
              "husband": {
                "name": "Nguyễn Đình Đường",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_ngot",
                  "name": "Ngọt",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.40",
                  "wife": {
                    "name": "Ngọt",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_mat",
                  "name": "Mật",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.40",
                  "husband": {
                    "name": "Mật",
                    "title": "Ông"
                  },
                  "notes": "PDF có dấu chấm lửng sau bà Ngọt; không tự bổ sung tên còn thiếu."
                },
                {
                  "id": "gen5_thu",
                  "name": "Thu",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.40",
                  "husband": {
                    "name": "Thu",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_dong_5_40",
                  "name": "Đông",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.40",
                  "husband": {
                    "name": "Đông",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_nguyen_dinh_hai",
              "name": "Nguyễn Đình Hải",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.51",
              "husband": {
                "name": "Nguyễn Đình Hải",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_son",
                  "name": "Sơn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.41",
                  "husband": {
                    "name": "Sơn",
                    "title": "Ông"
                  }
                }
              ]
            },
            {
              "id": "gen4_thi_gai",
              "name": "Nguyễn Thị Gái",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.52",
              "wife": {
                "name": "Nguyễn Thị Gái",
                "title": "Bà"
              },
              "children": [
                {
                  "id": "gen5_minh",
                  "name": "Minh",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.42",
                  "husband": {
                    "name": "Minh",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_duc",
                  "name": "Đức",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.42",
                  "husband": {
                    "name": "Đức",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_tho_2",
                  "name": "Thọ",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.42",
                  "husband": {
                    "name": "Thọ",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_loc",
                  "name": "Lộc",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.42",
                  "husband": {
                    "name": "Lộc",
                    "title": "Ông"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "gen2_cai_con",
      "name": "Cai Cỏn",
      "generation": 2,
      "bloodline": "husband",
      "source": "1:2.06",
      "husband": {
        "name": "Cai Cỏn",
        "title": "Cụ Ông",
        "alias": "Hiệu Phúc Cẩn",
        "anniversary": "6-9"
      },
      "children": [
        {
          "id": "gen3_chanh_chuot",
          "name": "Chánh Chức",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.17",
          "wife": {
            "name": "Chánh Chức",
            "title": "Cụ Bà"
          },
          "notes": "PDF ghi: Tốp ông Trai Choét."
        },
        {
          "id": "gen3_diem_bim",
          "name": "Điểm Bà",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.18",
          "wife": {
            "name": "Điểm Bà",
            "title": "Cụ Bà"
          },
          "children": [
            {
              "id": "gen4_soan_nghich",
              "name": "Soạn Nghếch",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.53",
              "husband": {
                "name": "Soạn Nghếch",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_thanh",
                  "name": "Thanh",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.43",
                  "wife": {
                    "name": "Thanh",
                    "title": "Bà"
                  },
                  "notes": "Đẻ Dũng Đen."
                },
                {
                  "id": "gen5_soan",
                  "name": "Soạn",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.43",
                  "husband": {
                    "name": "Soạn",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_tuyen",
                  "name": "Tuyển",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.43",
                  "husband": {
                    "name": "Tuyển",
                    "title": "Ông"
                  }
                },
                {
                  "id": "gen5_soan_na",
                  "name": "Na",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.43",
                  "wife": {
                    "name": "Na",
                    "title": "Bà"
                  }
                }
              ]
            },
            {
              "id": "gen4_tra",
              "name": "Trà",
              "generation": 4,
              "bloodline": "husband",
              "source": "1:4.54",
              "husband": {
                "name": "Trà",
                "title": "Ông"
              },
              "children": [
                {
                  "id": "gen5_tuoc",
                  "name": "Tước",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.44",
                  "wife": {
                    "name": "Tước",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_dinh_5_44",
                  "name": "Đỉnh",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.44",
                  "wife": {
                    "name": "Đỉnh",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_the_5_44",
                  "name": "The",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.44",
                  "wife": {
                    "name": "The",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_huan",
                  "name": "Huân",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.44",
                  "wife": {
                    "name": "Huân",
                    "title": "Bà"
                  }
                },
                {
                  "id": "gen5_phu",
                  "name": "Phú",
                  "generation": 5,
                  "bloodline": "wife",
                  "source": "1:5.44",
                  "wife": {
                    "name": "Phú",
                    "title": "Bà",
                    "alias": "Cung"
                  }
                },
                {
                  "id": "gen5_lam",
                  "name": "Lâm",
                  "generation": 5,
                  "bloodline": "husband",
                  "source": "1:5.44",
                  "husband": {
                    "name": "Lâm",
                    "title": "Ông"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "gen3_nguyen_van_lien",
          "name": "Nguyễn Văn Liên",
          "generation": 3,
          "bloodline": "husband",
          "source": "1:3.19",
          "husband": {
            "name": "Nguyễn Văn Liên",
            "title": "Cụ Ông"
          },
          "children": [
            {
              "id": "gen4_thi_thi",
              "name": "Nguyễn Thị Tiếp Lớn",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.55",
              "wife": {
                "name": "Nguyễn Thị Tiếp Lớn",
                "title": "Bà"
              },
              "notes": "Không con trai; ở Cầu Hai, Phú Thọ."
            },
            {
              "id": "gen4_nguyen_thi_tiep_con",
              "name": "Nguyễn Thị Tiếp Con",
              "generation": 4,
              "bloodline": "wife",
              "source": "1:4.56",
              "wife": {
                "name": "Nguyễn Thị Tiếp Con",
                "title": "Bà"
              },
              "notes": "Không con trai; ở KM5 Hang Hùm, Tuyên Quang."
            }
          ]
        },
        {
          "id": "gen3_tuyen_early",
          "name": "Tuyên",
          "generation": 3,
          "bloodline": "wife",
          "source": "1:3.20",
          "wife": {
            "name": "Tuyên",
            "title": "Cụ Bà",
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
    
    this.cardWidth = 196;
    this.cardHeight = 104;
    this.levelSpacing = 260;
    this.nodeSpacing = 126;
    
    this.activeNodeId = null;
    this.searchQuery = "";
    this.compareTargetId = null;
    this.compareLcaId = null;
    this.rootNode = null; // D3 root
    this.nodesMap = {}; // Flat lookup map
    this.orientation = "horizontal";
    this.viewMode = "tree";
    this.branchId = "all";
    this.autoFit = true;
    
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
    d3.select(this.container).selectAll("svg").remove();
    
    // Create base SVG and outer group
    this.svg = d3.select(this.container)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("overflow", "hidden");
      
    this.gAll = this.svg.append("g").attr("class", "zoomable-canvas");
    
    // Setup Zoom and Pan behaviors
    this.zoom = d3.zoom()
      .scaleExtent([0.01, 4])
      .on("zoom", (event) => {
        this.gAll.attr("transform", event.transform);
        document.getElementById("zoom-level").textContent = `${Math.round(event.transform.k * 100)}%`;
        if (event.sourceEvent) this.autoFit = false;
      });
      
    this.svg.call(this.zoom);
    
    // Prevent zoom actions on double-clicks (we will handle it custom)
    this.svg.on("dblclick.zoom", null);
  }

  // Setup dynamic window resizing
  setupResizeListener() {
    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame);
      this.resizeFrame = requestAnimationFrame(() => {
        if (!this.container.clientWidth || !this.container.clientHeight) return;
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        if (this.viewMode === "tree" && this.autoFit) this.fitToScreen(0);
      });
    });
    this.resizeObserver.observe(this.container);
  }

  setBranch(branchId) {
    this.branchId = branchId;
    const data = branchId === "all" ? this.rawData : {
      ...this.rawData,
      children: this.rawData.children.filter(branch => branch.id === branchId)
    };
    this.rootNode = d3.hierarchy(data);
    this.overview?.setBranch(branchId);
    if (this.viewMode === "tree") {
      this.render(this.rootNode);
      this.fitToScreen();
    }
  }

  setViewMode(mode) {
    this.viewMode = mode;
    this.overview.isActive = mode === "overview";
    document.body.dataset.view = mode;
    this.container.hidden = mode !== "tree";
    this.overview.container.hidden = mode !== "overview";
    for (const name of ["overview", "tree"]) {
      const button = document.getElementById(`btn-view-${name}`);
      button.classList.toggle("active", name === mode);
      button.setAttribute("aria-pressed", String(name === mode));
    }
    document.getElementById("view-hint").textContent = mode === "overview"
      ? "Chạm vào tên để xem thông tin" : "Kéo để di chuyển · Cuộn hoặc chụm hai ngón để thu phóng";
    if (mode === "overview") {
      this.overview.fit();
    } else {
      this.setBranch(document.getElementById("branch-select").value);
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      this.fitToScreen(0);
    }
  }

  closeSidebar() {
    const sidebar = document.getElementById("details-sidebar");
    const wasOpen = sidebar.classList.contains("active");
    const selectedId = this.activeNodeId;
    sidebar.classList.remove("active");
    sidebar.setAttribute("aria-hidden", "true");
    sidebar.inert = true;
    document.body.classList.remove("has-details");
    this.activeNodeId = null;
    this.compareTargetId = null;
    this.compareLcaId = null;
    this.render(this.rootNode);
    this.overview?.updateHighlights();
    if (wasOpen) {
      const previous = this.lastSelectionButton;
      const fallback = this.overview?.container.querySelector(`[data-node-id="${selectedId}"]`);
      const target = previous?.isConnected && previous.getClientRects().length ? previous : fallback;
      (target || document.getElementById("search-input")).focus({ preventScroll: true });
    }
  }

  // Render the D3 Tree Node Link Layout
  render(source = this.rootNode) {
    if (this.viewMode === "overview") {
      this.overview?.updateHighlights();
      this.overview?.fit();
      return;
    }
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 240;
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
    document.getElementById("view-status").textContent = `${nodes.length} mục trên sơ đồ · ${this.branchId === "all" ? "Tất cả các nhánh" : "Nhánh đã chọn"}`;

    const nodeElements = this.gAll.selectAll("g.node-group")
      .data(nodes, d => d.data.id);
      
    // Enter any new nodes at the parent's previous position.
    const nodeEnter = nodeElements.enter()
      .append("g")
      .attr("class", "node-group")
      .attr("data-node-id", d => d.data.id)
      .attr("role", "button")
      .attr("tabindex", 0)
      .attr("aria-label", d => `Đời ${d.data.generation}: ${d.data.name}`)
      .on("keydown", (event, d) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.selectNode(d.data.id);
        }
      })
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
        if (this.autoFit) this.fitToScreen();
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
        if (this.autoFit) this.fitToScreen();
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
      
    // Wrap full names rather than cutting them off on compact cards.
    nodeEnter.append("title").text(d => d.data.name);
    const wrapName = (element, name, y, size) => {
      const label = d3.select(element).append("text")
        .attr("class", "node-label")
        .attr("text-anchor", "middle")
        .attr("font-size", size)
        .attr("y", y);
      let line = [];
      let row = label.append("tspan").attr("x", 0).attr("dy", 0);
      for (const word of name.split(/\s+/)) {
        line.push(word);
        row.text(line.join(" "));
        if (row.node().getComputedTextLength() > this.cardWidth - 20 && line.length > 1) {
          line.pop();
          row.text(line.join(" "));
          line = [word];
          row = label.append("tspan").attr("x", 0).attr("dy", 13).text(word);
        }
      }
      return label;
    };
    nodeEnter.append("g").attr("class", "node-content").each((d, index, elements) => {
      const element = elements[index];
      const primary = d.data[d.data.bloodline];
      const spouse = d.data[d.data.bloodline === "wife" ? "husband" : "wife"];
      d3.select(element).append("text")
        .attr("class", "node-desc").attr("text-anchor", "middle")
        .attr("y", -35).attr("font-size", 9)
        .text(`ĐỜI ${d.data.generation} · ${primary?.title || ""}`);
      wrapName(element, primary?.name || d.data.name, spouse ? -15 : 0, 13)
        .classed("bloodline", true);
      if (spouse) wrapName(element, spouse.name, 17, 11).classed("spouse", true);
      d3.select(element).append("text")
        .attr("class", "node-desc").attr("text-anchor", "middle")
        .attr("y", 43).attr("font-size", 9)
        .text(d.data.children?.length ? `${d.data.children.length} con` : "");
    });

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

    this.overview?.updateHighlights();
    if (this.viewMode === "overview") this.overview?.fit();

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
    this.lastSelectionButton = document.activeElement;
    if (this.viewMode === "tree") {
      const path = this.getLineagePath(nodeId);
      if (this.branchId !== "all" && path[1] && path[1].id !== this.branchId) {
        this.setBranch(path[1].id);
        document.getElementById("branch-select").value = path[1].id;
      }
      // Search can reach a person even when an ancestor is collapsed.
      let current = this.rootNode;
      for (const ancestor of path.slice(1)) {
        if (current._children) {
          current.children = current._children;
          current._children = null;
        }
        current = current.children?.find(child => child.data.id === ancestor.id);
        if (!current) break;
      }
    }
    this.activeNodeId = nodeId;
    this.compareTargetId = null;
    this.compareLcaId = null;
    if (openSidebar) this.populateSidebar(nodeId);
    if (this.viewMode === "overview") {
      this.overview.select(nodeId);
    } else {
      this.render(this.rootNode);
      this.centerOnNode(nodeId);
    }
  }

  // Toggle orientation between Horizontal and Vertical
  toggleOrientation() {
    this.orientation = (this.orientation === "horizontal") ? "vertical" : "horizontal";
    this.render(this.rootNode);
    this.fitToScreen();
  }

  availableViewport() {
    let width = this.container.clientWidth;
    let height = this.container.clientHeight;
    const sidebar = document.getElementById("details-sidebar");
    if (sidebar.classList.contains("active")) {
      if (window.innerWidth <= 768) height -= sidebar.getBoundingClientRect().height;
      else width -= sidebar.getBoundingClientRect().width;
    }
    return { width: Math.max(120, width), height: Math.max(100, height) };
  }

  centerOnNode(nodeId) {
    const node = this.rootNode.descendants().find(d => d.data.id === nodeId);
    if (!node) return;
    this.autoFit = false;
    const { width, height } = this.availableViewport();
    const scale = window.innerWidth <= 768 ? 1 : 1.1;
    const x = this.orientation === "horizontal" ? node.y : node.x;
    const y = this.orientation === "horizontal" ? node.x : node.y;
    this.svg.interrupt().transition().duration(300).call(this.zoom.transform,
      d3.zoomIdentity.translate(width / 2 - x * scale, height / 2 - y * scale).scale(scale));
  }

  fitToScreen(duration = 300) {
    if (!this.rootNode || this.container.hidden) return;
    const nodes = this.rootNode.descendants();
    if (!nodes.length) return;
    this.autoFit = true;
    const horizontal = this.orientation === "horizontal";
    const xMin = d3.min(nodes, d => horizontal ? d.y : d.x) - this.cardWidth / 2 - 28;
    const xMax = d3.max(nodes, d => horizontal ? d.y : d.x) + this.cardWidth / 2 + 28;
    const yMin = d3.min(nodes, d => horizontal ? d.x : d.y) - this.cardHeight / 2 - 28;
    const yMax = d3.max(nodes, d => horizontal ? d.x : d.y) + this.cardHeight / 2 + 28;
    const { width, height } = this.availableViewport();
    const scale = Math.min((width - 32) / (xMax - xMin), (height - 32) / (yMax - yMin), 1.4);
    const transform = d3.zoomIdentity
      .translate(width / 2 - (xMin + xMax) * scale / 2, height / 2 - (yMin + yMax) * scale / 2)
      .scale(scale);
    this.svg.interrupt();
    if (duration > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.svg.transition().duration(duration).call(this.zoom.transform, transform);
    } else this.svg.call(this.zoom.transform, transform);
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
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.inert = false;
    sidebar.scrollTop = 0;
    document.body.classList.add("has-details");
    
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
      const isWifeDescendant = node.bloodline === "wife";
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
    const siblings = this.nodesMap[lca.id]?.children || [];
    const idx1 = c1 ? siblings.findIndex(child => child.id === c1.id) : -1;
    const idx2 = c2 ? siblings.findIndex(child => child.id === c2.id) : -1;
    if (idx1 !== -1 && idx2 !== -1) branchIsOlder = idx1 < idx2;
    
    const getBloodlineName = (node) => {
      if (!node) return "";
      return node[node.bloodline]?.name || node.name;
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
      const isFemale = this.nodesMap[nodeIdA].bloodline === "wife";
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
        const isFemale = this.nodesMap[nodeIdA].bloodline === "wife";
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
    this.autoFit = false;
    this.svg.transition().duration(300).call(this.zoom.scaleBy, 1.3);
  }
  
  zoomOut() {
    this.autoFit = false;
    this.svg.transition().duration(300).call(this.zoom.scaleBy, 1 / 1.3);
  }
  
  // Set Search query
  setSearch(query) {
    this.searchQuery = query;
    if (this.viewMode === "tree") this.render(this.rootNode);
    this.overview?.updateHighlights();
  }
}

// Instantiate and configure visualizer on page load
document.addEventListener("DOMContentLoaded", () => {
  const visualizer = new FamilyTreeVisualizer("tree-container", familyData);
  
  visualizer.overview = new FamilyOverview(document.getElementById("overview-container"), visualizer);
  visualizer.setViewMode("overview");
  const branchSelect = document.getElementById("branch-select");
  for (const branch of familyData.children) {
    const option = document.createElement("option");
    option.value = branch.id;
    option.textContent = FamilyOverview.primary(branch);
    branchSelect.append(option);
  }
  branchSelect.addEventListener("change", () => {
    visualizer.closeSidebar();
    visualizer.setBranch(branchSelect.value);
  });
  document.getElementById("btn-view-overview").addEventListener("click", () => visualizer.setViewMode("overview"));
  document.getElementById("btn-view-tree").addEventListener("click", () => visualizer.setViewMode("tree"));
  document.getElementById("btn-fullscreen").addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      document.getElementById("view-status").textContent = "Trình duyệt chưa hỗ trợ toàn màn hình. Bạn vẫn có thể xem tổng quan.";
    }
  });
  document.addEventListener("fullscreenchange", () => {
    const button = document.getElementById("btn-fullscreen");
    const label = document.fullscreenElement ? "Thoát toàn màn hình" : "Bật toàn màn hình";
    button.setAttribute("aria-label", label);
    button.title = label;
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") visualizer.closeSidebar();
  });

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
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Setup Toolbar Zoom buttons
  document.getElementById("btn-zoom-in").addEventListener("click", () => visualizer.zoomIn());
  document.getElementById("btn-zoom-out").addEventListener("click", () => visualizer.zoomOut());
  document.getElementById("btn-zoom-fit").addEventListener("click", () => {
    visualizer.closeSidebar();
    if (visualizer.viewMode === "overview") visualizer.overview.fit();
    else visualizer.fitToScreen();
  });
  
  // Keep orientation controls available in the diagram toolbar.
  const rotateBtn = document.getElementById("btn-rotate-tree");
  if (rotateBtn) {
    rotateBtn.addEventListener("click", () => {
      visualizer.toggleOrientation();
    });
  }
  
  // Setup Sidebar close button
  document.getElementById("btn-close-sidebar").addEventListener("click", () => visualizer.closeSidebar());

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
        const div = document.createElement("button");
        div.type = "button";
        div.className = "search-item";
        div.innerHTML = `
          <span class="search-item-name">${node.name}</span>
          <span class="search-item-info">Đời ${node.generation} ${node.notes ? `• ${node.notes.substring(0, 30)}` : ""}</span>
        `;
        div.addEventListener("click", () => {
          treeVis.selectNode(node.id);
          searchResults.style.display = "none";
          searchInput.blur();
        });
        searchResults.appendChild(div);
      });
    } else {
      searchResults.style.display = "none";
    }
  }
});
