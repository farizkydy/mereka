import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { GetDetailNominateVoteResponse, GetListNominateVoteResponse, VotingJsonResponse } from "../../../@core/domain/voting.entity";
import { VotingRepository } from "../../../@core/repository/voting.repository";

@Injectable({
  providedIn: 'root',
})
export class VotingMock extends VotingRepository {

  GetListNominateVoting(param: string): Observable<GetListNominateVoteResponse> {
    const mock =  {
      "status": true,
      "message": "Successfully get data",
      "end_date": "20-10-2023",
      "data": {
        "Categories": [
          {
            "category_code": "KD1",
            "title": "Kategori  1",
            "description": "",
            "nominations": [
              {
                "id": "HAAS",
                "nomination_name": "Happy Asmara",
                "sub_title": "",
                "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd1-haas.png",
                "buttons": [
                  {
                    "label": "Vote"
                  }
                ],
                "details": {
                  "type": "new_page",
                  "title": "Syarat dan Ketentuan",
                  "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
                  "buttons": [
                    {
                      "label": "Vote dengan POIN"
                    }
                  ]
                }
              },
              {
                "id": "DECA",
                "nomination_name": "Denny Caknan",
                "sub_title": "",
                "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd1-deca.png",
                "buttons": [
                  {
                    "label": "Vote"
                  }
                ],
                "details": {
                  "type": "new_page",
                  "title": "Syarat dan Ketentuan",
                  "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
                  "buttons": [
                    {
                      "label": "Vote dengan POIN"
                    }
                  ]
                }
              }
            ]
          },
          {
            "category_code": "KD2",
            "title": "Kategori  2",
            "description": "",
            "nominations": [
              {
                "id": "NEKH",
                "nomination_name": "Nella Kharisma",
                "sub_title": "",
                "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd2-nekh.png",
                "buttons": [
                  {
                    "label": "Vote"
                  }
                ],
                "details": {
                  "type": "new_page",
                  "title": "Syarat dan Ketentuan",
                  "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
                  "buttons": [
                    {
                      "label": "Vote dengan POIN"
                    }
                  ]
                }
              },
              {
                "id": "GHYO",
                "nomination_name": "Ghea Youbi",
                "sub_title": "",
                "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd2-ghyo.png",
                "buttons": [
                  {
                    "label": "Vote"
                  }
                ],
                "details": {
                  "type": "new_page",
                  "title": "Syarat dan Ketentuan",
                  "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
                  "buttons": [
                    {
                      "label": "Vote dengan POIN"
                    }
                  ]
                }
              },
              {
                "id": "LEKE",
                "nomination_name": "Lesti Kejora",
                "sub_title": "",
                "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd2-ghyo.png",
                "buttons": [
                  {
                    "label": "Vote"
                  }
                ],
                "details": {
                  "type": "new_page",
                  "title": "Syarat dan Ketentuan",
                  "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
                  "buttons": [
                    {
                      "label": "Vote dengan POIN"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
    return of(mock)
  }

  GetDetailNominateVoting(): Observable<GetDetailNominateVoteResponse> {
    const mock =  {
      "status": true,
      "status_code": "00000",
      "message": "Success Get Data",
      "data": {
          "nomination_code": "KD1-HAAS",
          "nomination_name": "Happy Asmara",
          "sub_title": "",
          "image": "https://www.telkomsel.com/sites/default/files/2023-10/kd1-haas.png",
          "button": [
              {
                  "label": "Vote"
              }
          ],
          "details": {
              "keyword": "VSDEP1MER",
              "description": "Heppy Rismanda Hendranata, (lahir 10 Juli 1999) dikenal secara profesional sebagai Happy Asmara adalah seorang penyanyi-penulis lagu, personalitas televisi, presenter, dan pengusaha berkebangsaan Indonesia asal Kediri, Jawa Timur.",
              "buttons": [
                  {
                      "label": "Vote dengan POIN"
                  }
              ]
          }
      }
  }
    return of(mock)
  }

  GetJsonContentVoting(): Observable<VotingJsonResponse> {
    const mock = {
      "message": "Success",
      "status": true,
      "data": {
          "end_date": "27-10-2023",
          "end_voting_header": {
              "giveaway_label": "Lihat Pemenang Giveaway Dangdut Awards disini",
              "remaining_label": "Masa Voting Berakhir",
              "summarize_vote": {
                  "title": "Perolehan Vote"
              }
          },
          "entry_background": {
              "background_img": "https://www.telkomsel.com/sites/default/files/2023-10/entry-voting-bg.png"
          },
          "entry_header": {
              "banner_img": "https://www.telkomsel.com/sites/default/files/2023-10/entry-header-img.png",
              "description": "Vote Pedangdut Pilihanmu dengan menukarkan POIN dan Menangkan Giveaway di akhir masa voting",
              "remaining_end_label": "Hari Tersisa",
              "remaining_label": "Masa Voting",
              "title": ""
          },
          "event_code": "votingdangdut2023",
          "recommendation_package": {
              "is_show": true,
              "package_id": "ML3_XXX_XXXX"
          },
          "result_header": {
              "button": "Vote Sekarang",
              "description": "Tukarkan POIN Telkomsel Anda untuk vote penyanyi dangdut pilihan dari Telkomsel Awards 2023",
              "title": "Perolehan Vote Studio Dangdut"
          },
          "term_condition": {
              "description": "<ul><li>1 vote bernilai 1 POIN</li><li>vote dapat diberikan sebanyak-banyaknya senilai dengan jumlah yang sama dengan POIN</li></ul>",
              "title": "Syarat dan Ketentuan"
          },
          "type": "poin",
          "vote_options": {
              "options": [
                  {
                      "label": "1 Vote / 1 POIN",
                      "value": 1
                  },
                  {
                      "label": "2 Vote / 2 POIN",
                      "value": 2
                  },
                  {
                      "label": "3 Vote / 3 POIN",
                      "value": 3
                  },
                  {
                      "label": "4 Vote / 4 POIN",
                      "value": 4
                  },
                  {
                      "label": "5 Vote / 5 POIN",
                      "value": 5
                  }
              ],
              "title": "Pilih jumlah POIN yang ingin digunakan untuk Vote"
          },
          "vote_status": {
              "button": {
                  "main": "Lihat Perolehan Voting",
                  "primary": "Vote Lagi",
                  "secondary": "Kembali ke Beranda"
              },
              "description": "Permintaan Kamu sedang di proses. Tunggu pemberitahuan selanjutnya",
              "recommend_you": "Rekomendasi untuk Kamu",
              "title": "Vote dalam proses"
          },
          "is_show_percentage": true
      }
  }

    return of(mock);
  }

}
