
    /*
    * Constants & Variables for buttons and div placeholders
    * */
    const companyDomainButton = $("button#companyDomain");
    const industryButton = $("button#industryButton");
    const technologyButton = $("button#technologyButton");
    const companySearch = $("input#company-input");
    const autoCompleteUL = $(".autocomplete-result > ul");
    const searchButtonCompanyDomain = $("button#companyDomainSearchButton");
    const companySection = $("#company-section");
    const industrySection = $("#industry-section");
    const technologySection = $("#technology-section");
    const industryNextButton = $("#industryNextButton");
    const locationNextButton = $("#locationNextButton");
    const backToIndustryButton = $("#backToIndustryButton");
    const backToLocationButton = $("#backToLocationButton");
    const industrySearchButton = $("#industrySearchButton");
    const technologySearchButton = $("#technologySearchButton");
    const industrySearch = $("#industry-input");
    const companySizeInput = $("#company-size-input");
    const technologyInput = $("#technology-input");
    const locationSearch = $("#location-input");
    const technologyTbody = $("table#technology-result-table > tbody");
    const filteredEmailTbody = $("table#filtered-emails-result-table > tbody");
    const industryStep1 = $("#industry-step-1");
    const industryStep2 = $("#industry-step-2");
    const industryStep3 = $("#industry-step-3");
    const filterCompanyInput = $("#filter-company-technology");
    const filterCompanyButton = $("#filter-company-button");
    const searchKeyBadgesUL = $(".search-key-badges > ul");
    const selectEmailsTechnology = $("#select-emails-technology");
    const selectProspectTechnology = $("#select-prospect-technology");
    const selectEmailsIndustry = $("#select-emails-industry");
    const selectProspectIndustry = $("#select-prospect-industry");
    const selectEmailsCompany = $("#select-emails-company");
    const selectProspectCompany = $("#select-prospect-company");
    const loginButton = $("button#loginButton");
    const registerButton = $("button#registerButton");
    const logOutButton = $("a#logoutButton");
    const purchaseTechnologyButton = $("button#purchase-technology-section");
    const purchaseIndustryButton = $("button#purchase-industry-section");
    const purchaseCompanyButton = $("button#purchase-company-section");
    const Loader = $(".loader");
    const totalCreditsDiv = $("#total-credits");
    const purchaseButton = $("button.purchase-button");
    const totalPriceCompanyTR = $("tr.total-price-company");
    const totalPriceIndustryTR = $("tr.total-price-industry");
    const totalPriceTechnologyTR = $("tr.total-price-technology");

    let sendData = [];
    let industryData = [];
    let technologyDataTable = [
        {website: "www.optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {website: "www.wordpress.com", company: "Wordpress Inc.", technology: "Wordpress", country: "United States"},
        {website: "www.medium.com", company: "Twitter Inc.", technology: "Wordpress", country: "United States"},
        {
            website: "www.holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            website: "www.partsogre.com",
            company: "Classic Turf Parts Ogre",
            technology: "Big Commerce",
            country: "United States"
        },
        {website: "www.specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {website: "www.google.com", company: "Alphabet Corp.", technology: "GoLang", country: "Ireland"},
        {website: "www.php.com", company: "PHP Inc.", technology: "PHP", country: "United Kingdom"},
        {website: "www.amazon.com", company: "Amazon Inc.", technology: "React", country: "United States"},

    ];
    let filteredCompanyEmails = [
        {email: "***e@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***c@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***i@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***p@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***r@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***q@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},
        {email: "***w@optimum7.com", company: "Optimum7 Inc.", technology: "Wordpress", country: "United States"},

        {
            email: "***p@partsogre.com",
            company: "Classic Turf Parts Ogre",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***r@partsogre.com",
            company: "Classic Turf Parts Ogre",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***q@partsogre.com",
            company: "Classic Turf Parts Ogre",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***w@partsogre.com",
            company: "Classic Turf Parts Ogre",
            technology: "Big Commerce",
            country: "United States"
        },

        {
            email: "***p@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***r@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***q@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***w@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***r@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***q@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },
        {
            email: "***w@holistichealer.com",
            company: "Holistic Healer Corp.",
            technology: "Big Commerce",
            country: "United States"
        },

        {email: "***p@google.com", company: "Alphabet Corp.", technology: "GoLang", country: "Ireland"},
        {email: "***r@google.com", company: "Alphabet Corp.", technology: "GoLang", country: "Ireland"},
        {email: "***q@google.com", company: "Alphabet Corp.", technology: "GoLang", country: "Ireland"},
        {email: "***w@google.com", company: "Alphabet Corp.", technology: "GoLang", country: "Ireland"},

        {email: "***p@specialistid.com", company: "Specialist ID Inc..", technology: "Shopify", country: "United States"},
        {email: "***r@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***q@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***w@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***p@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***r@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***q@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
        {email: "***w@specialistid.com", company: "Specialist ID Inc.", technology: "Shopify", country: "United States"},
    ];
    let updatedDataTable = null;
    let updatedTechnologyDataTable = null;
    let selectedCompany = null;
    let technologySectionDataForPurchase = {totalPrice:null, totalEmails: null, totalProspects: null, unitPrice: 0.06};
    let industrySectionDataForPurchase = {totalPrice:null, totalEmails: null, totalProspects: null, unitPrice: 0.06};
    let companySectionDataForPurchase = {totalPrice:null, totalEmails: null, totalProspects: null, unitPrice: 0.06};
    let unitPriceTD = $("tr.unit-price > td");
    let quantityType = "email";
    const totalCredits = 15.00;

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };




    /*
    * Dummy Autocomplete Data.
    * */
    let autocompleteData = ["Optimum7", "Google", "Microsoft", "Apple", "Amazon", "Big Commerce", "Shopify", "Wallmart", "AT&T", "Exxon Mobil", "Ford Motor", "General Motors", "Tesla", "Oracle", "Orange"];



    /*
    * Search page Select a search section buttons and their active/de-active states.
    * */
    companyDomainButton.click(function () {
        $(this).addClass("active");
        $("#search-page").addClass("onReady");
        industryButton.removeClass("active");
        technologyButton.removeClass("active");
        _generateSection("companyDomain");
    });

    industryButton.click(function () {
        $(this).addClass("active");
        $("#search-page").addClass("onReady");
        companyDomainButton.removeClass("active");
        technologyButton.removeClass("active");
        _generateSection("industry");
    });

    technologyButton.click(function () {
        $(this).addClass("active");
        $("#search-page").addClass("onReady");
        industryButton.removeClass("active");
        companyDomainButton.removeClass("active");
        _generateSection("technology");
    });

    const _generateSection = function (sectionName) {
        switch (sectionName) {
            case "companyDomain" :
                companySection.show();
                industrySection.hide();
                technologySection.hide();
                break;
            case "industry" :
                companySection.hide();
                industrySection.show();
                technologySection.hide();
                break;
            case "technology" :
                companySection.hide();
                industrySection.hide();
                technologySection.show();
                break;
            default :
                break;
        }
    };



    /*
    * Company / Domain Search Function
    * */
    companySearch.on("keyup", function (e) {
        autoCompleteUL.empty();
        if (e.target.value.length === 0) {
            autoCompleteUL.empty();
        } else {
            let query = e.target.value;
            // escape regex
            query = query.replace(
                /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"
            );
            let queryRegExp = new RegExp('^' + query, 'i');

            let results = autocompleteData.filter(function (item) {
                return queryRegExp.test(item);
            });

            results.forEach(function (item) {
                autoCompleteUL.append("<li data-value='" + item + "'>" + item + "</li>");
            });

            const autoCompleteItem = $(".autocomplete-result > ul > li");
            autoCompleteItem.on("click", function () {
                autoCompleteUL.empty();
                let value = $(this).data("value");
                companySearch.val(value);
                selectedCompany = value;
            });
        }
    });

    searchButtonCompanyDomain.click(function () {
        sendData.push({fieldName: "companyDomain", value: companySearch.val()});
        Loader.removeAttr("hidden");
        setTimeout(() => {
            $("#company-section .result-table").removeAttr("hidden");
            $("#company-section .result-details").removeAttr("hidden");
            $("#company-section .result-amount").removeAttr("hidden");
            Loader.attr("hidden", true);
            const element = document.getElementById("company-filtered-title");
            element.scrollIntoView({behavior: "smooth"});
        }, 1200)
    });



    /*
    * Industry Search Function
    * */
    industryNextButton.click(function () {
        Loader.removeAttr("hidden");
        setTimeout(() => {
            if (industrySearch.val() !== "") {
                industryStep2.removeAttr("hidden");
                industryStep1.attr("hidden", true);
                industryData.push({fieldName: "industry", value: industrySearch.val()});
                searchKeyBadgesUL.append("<li id='industryLabel'>Industry: " + industrySearch.val() + "</li>")
            }
            Loader.attr("hidden", true);
        }, 500)
    });

    locationNextButton.click(function () {
        Loader.removeAttr("hidden");
        setTimeout(() => {
            if (locationSearch.val() !== "") {
                industryStep2.attr("hidden", true);
                industryStep1.attr("hidden", true);
                industryStep3.removeAttr("hidden");
                industryData.push({fieldName: "location", value: locationSearch.val()});
                searchKeyBadgesUL.append("<li id='locationLabel'>Location: " + locationSearch.val() + "</li>")
            }
            Loader.attr("hidden", true);
        }, 500)
    });

    backToLocationButton.click(function () {
        Loader.removeAttr("hidden");
        $("#industry-section .result-table").attr("hidden", true);
        $("#industry-section .result-details").attr("hidden", true);
        setTimeout(() => {
            industryStep2.removeAttr("hidden");
            industryStep1.attr("hidden", true);
            industryStep3.attr("hidden", true);

            $("ul > li#locationLabel").remove();
            $("ul > li#companySizeLabel").remove();
            industryData.map((row) => {
                if (row.fieldName === "location") {
                    let itemIndex = industryData.indexOf(row);
                    industryData.splice(itemIndex, 1);

                }
            });

            industryData.map((row) => {
                if (row.fieldName === "companySize") {
                    let itemIndex = industryData.indexOf(row);
                    industryData.splice(itemIndex, 1);

                }
            });


            Loader.attr("hidden", true);
        }, 500)
    });

    backToIndustryButton.click(function () {
        Loader.removeAttr("hidden");
        $("#industry-section .result-table").attr("hidden", true);
        $("#industry-section .result-details").attr("hidden", true);
        setTimeout(() => {
            industryStep2.attr("hidden", true);
            industryStep1.removeAttr("hidden");
            industryStep3.attr("hidden", true);
            $("ul > li#industryLabel").remove();

            industryData.map((row) => {
                if (row.fieldName === "industry") {
                    let itemIndex = industryData.indexOf(row);
                    industryData.splice(itemIndex, 1);
                }
            });
            Loader.attr("hidden", true);
        }, 500)
    });

    industrySearchButton.click(function () {
        Loader.removeAttr("hidden");
        setTimeout(() => {

            $("ul > li#companySizeLabel").remove();

            let hasTag = function (tagName) {
                let i = null;
                for (i = 0; industryData.length > i; i += 1) {
                    if (industryData[i].fieldName === tagName) {
                        return true;
                    }
                }

                return false;
            };

            if (hasTag("companySize")) {
                industryData.map((row) => {
                    if (row.fieldName === "companySize") {
                        let itemIndex = industryData.indexOf(row);
                        industryData.splice(itemIndex, 1);
                        if (companySizeInput.val() !== "0") {
                            industryData.push({fieldName: "companySize", value: companySizeInput.val()});
                            searchKeyBadgesUL.append("<li id='companySizeLabel'>Company Size: " + companySizeInput.val() + "</li>")
                        }

                    }
                });
            } else {
                industryData.push({fieldName: "companySize", value: companySizeInput.val()});
                searchKeyBadgesUL.append("<li id='companySizeLabel'>Company Size: " + companySizeInput.val() + "</li>")
            }


            // industryData.push({fieldName: "companySize", value: companySizeInput.val()});


            console.log("Industry Search Key List: ", industryData);
            $("#industry-section .result-table").removeAttr("hidden");
            $("#industry-section .result-details").removeAttr("hidden");
            Loader.attr("hidden", true);
        }, 1000)
    });



    /*
    * Technology Search Function.
    * */
    technologySearchButton.click(function () {
        let searchedTechnologyValues = technologyInput.val();

        if (searchedTechnologyValues.length > 0) {
            $("#no-content-message").attr("hidden", true);
            $("#technology-section #result-table-technology").attr("hidden", true);
            $("#filtered-emails-result-table").attr("hidden", true);
            $("#filtered-title").attr("hidden", true);
            Loader.removeAttr("hidden");
            technologyTbody.empty();
            setTimeout(() => {
                updatedTechnologyDataTable = technologyDataTable.filter(item => searchedTechnologyValues.includes(item.technology));
                if (updatedTechnologyDataTable.length > 0) {
                    $("#technology-section #result-table-technology").removeAttr("hidden");
                    updatedTechnologyDataTable.map((item) => {
                        technologyTbody.append(
                            "<tr data-company='" + item.company + "'>" +
                            "<td>" +
                            item.website +
                            "</td>" +
                            "<td>" +
                            item.company +
                            "</td>" +
                            "<td>" +
                            item.technology +
                            "</td>" +
                            "<td>" +
                            item.country +
                            "</td>" +
                            "</tr>"
                        );
                    });

                    const technologyResultTableTR = $("table#technology-result-table > tbody tr");
                    technologyResultTableTR.click(function () {
                        $("#filter-company-technology").val($(this).data("company"));
                        _getEmailsByCompany($(this).data("company"));
                    });
                    Loader.attr("hidden", true);
                } else {
                    toastr.error("There is no result for this technology.");
                    Loader.attr("hidden", true);
                }


            }, 1000)
        } else {
            toastr.error("Please select at least one Technology.");
        }

    });

    filterCompanyInput.on("keyup", function (e) {
        $("#filtered-emails-result-table").attr("hidden", true);
        $("#filtered-title").attr("hidden", true);
        technologyTbody.empty();
        let searchTerm = e.target.value.toLocaleLowerCase();
        updatedDataTable = updatedTechnologyDataTable.filter(item => (item.company).toLocaleLowerCase().includes(searchTerm));
        updatedDataTable.map((item) => {
            technologyTbody.append(
                "<tr data-company='" + item.company + "'>" +
                "<td>" +
                item.website +
                "</td>" +
                "<td>" +
                item.company +
                "</td>" +
                "<td>" +
                item.technology +
                "</td>" +
                "<td>" +
                item.country +
                "</td>" +
                "</tr>"
            );
        });
        const technologyResultTableTR = $("table#technology-result-table > tbody tr");
        technologyResultTableTR.click(function () {
            $("#filter-company-technology").val($(this).data("company"));
            _getEmailsByCompany($(this).data("company"));
        });
    });

    const _getEmailsByCompany = function (companyName) {
        Loader.removeAttr("hidden");
        let updatedFilteredCompanyEmails = filteredCompanyEmails.filter(item => item.company.includes(companyName));
        if (updatedFilteredCompanyEmails.length > 0) {
            $("#filtered-title > span").html(companyName);
            $("#filtered-emails-result-table").removeAttr("hidden");
            $("#filtered-title").removeAttr("hidden");
            filteredEmailTbody.empty();
            setTimeout(() => {
                updatedFilteredCompanyEmails.map((item) => {
                    filteredEmailTbody.append(
                        "<tr>" +
                        "<td>" +
                        item.email +
                        "</td>" +
                        "<td>" +
                        item.company +
                        "</td>" +
                        "<td>" +
                        item.technology +
                        "</td>" +
                        "<td>" +
                        item.country +
                        "</td>" +
                        "</tr>"
                    );
                });
                $("#result-amount-technology").removeAttr("hidden");
                $("#result-details-technology").removeAttr("hidden");
                Loader.attr("hidden", true);
                const element = document.getElementById("filtered-title");
                element.scrollIntoView({behavior: "smooth"});
            }, 500);


        } else {
            filteredEmailTbody.empty();
            Loader.attr("hidden", true);
            $("#result-amount-technology").attr("hidden", true);
            $("#result-details-technology").attr("hidden", true);
            $("#filtered-emails-result-table").attr("hidden", true);
            $("#filtered-title").attr("hidden", true);
            toastr.error("There is no content for the search criteria.")
        }

    };

    filterCompanyButton.click(function () {
        _getEmailsByCompany(updatedDataTable[0].company);
    });

    selectEmailsTechnology.click(function () {
        $(this).addClass("active");
        technologySectionDataForPurchase.totalProspects = 0;
        technologySectionDataForPurchase.totalEmails = 0;
        technologySectionDataForPurchase.totalPrice = 0;
        totalPriceTechnologyTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "email";
        $(".technology-search-quantity-range").data("ionRangeSlider").update({from:0})
        technologySectionDataForPurchase.unitPrice = 0.06;
        unitPriceTD.html("$"+technologySectionDataForPurchase.unitPrice);
        selectProspectTechnology.removeClass("active");
    });

    selectProspectTechnology.click(function () {
        $(this).addClass("active");
        technologySectionDataForPurchase.totalProspects = 0;
        technologySectionDataForPurchase.totalEmails = 0;
        technologySectionDataForPurchase.totalPrice = 0;
        totalPriceTechnologyTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "prospect";
        $(".technology-search-quantity-range").data("ionRangeSlider").update({from:0})
        technologySectionDataForPurchase.unitPrice = 0.2;
        unitPriceTD.html("$"+technologySectionDataForPurchase.unitPrice);
        selectEmailsTechnology.removeClass("active");
    });

    selectEmailsIndustry.click(function () {
        $(this).addClass("active");
        industrySectionDataForPurchase.totalProspects = 0;
        industrySectionDataForPurchase.totalEmails = 0;
        industrySectionDataForPurchase.totalPrice = 0;
        totalPriceIndustryTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "email";
        $(".industry-search-quantity-range").data("ionRangeSlider").update({from:0})
        industrySectionDataForPurchase.unitPrice = 0.06;
        unitPriceTD.html("$"+industrySectionDataForPurchase.unitPrice);
        selectProspectIndustry.removeClass("active");
    });

    selectProspectIndustry.click(function () {
        $(this).addClass("active");
        industrySectionDataForPurchase.totalProspects = 0;
        industrySectionDataForPurchase.totalEmails = 0;
        industrySectionDataForPurchase.totalPrice = 0;
        totalPriceIndustryTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "prospect";
        $(".industry-search-quantity-range").data("ionRangeSlider").update({from:0});
        industrySectionDataForPurchase.unitPrice = 0.2;
        unitPriceTD.html("$"+industrySectionDataForPurchase.unitPrice);
        selectEmailsIndustry.removeClass("active");
    });

    selectEmailsCompany.click(function () {
        $(this).addClass("active");
        companySectionDataForPurchase.totalProspects = 0;
        companySectionDataForPurchase.totalEmails = 0;
        companySectionDataForPurchase.totalPrice = 0;
        totalPriceCompanyTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "email";
        $(".company-search-quantity-range").data("ionRangeSlider").update({from:0});
        companySectionDataForPurchase.unitPrice = 0.06;
        unitPriceTD.html("$"+companySectionDataForPurchase.unitPrice);
        selectProspectCompany.removeClass("active");
    });

    selectProspectCompany.click(function () {
        $(this).addClass("active");
        companySectionDataForPurchase.totalProspects = 0;
        companySectionDataForPurchase.totalEmails = 0;
        companySectionDataForPurchase.totalPrice = 0;
        totalPriceCompanyTR.attr("hidden", true);
        purchaseButton.attr("hidden", true);
        quantityType = "prospect";
        $(".company-search-quantity-range").data("ionRangeSlider").update({from:0});
        companySectionDataForPurchase.unitPrice = 0.2;
        unitPriceTD.html("$"+companySectionDataForPurchase.unitPrice);
        selectEmailsCompany.removeClass("active");
    });



    /*
    * Login Register Functions
    * */

    loginButton.click(function () {
        const email = $("input#email").val();
        const password = $("input#password").val();

        let loginData = {
            emailAddress: email,
            password: password
        };

        console.log(loginData);

        toastr.success("Login successful!");
        window.localStorage.setItem("logged", "true");
        setTimeout(() => {
            window.location.href = "/pages/account.html";
        }, 1200);
    });

    registerButton.click(function () {
        const agree = $("input#agree");
        const email = $("input#email").val();
        const firstName = $("input#firstName").val();
        const lastName = $("input#lastName").val();
        const password = $("input#password").val();
        const passwordConfirm = $("input#passwordConfirm").val();

        if (agree.is(":checked")) {
            let registerData = {
                firstName: firstName,
                lastName: lastName,
                emailAddress: email,
                password: password,
                passwordConfirm: passwordConfirm,
            };

            console.log(registerData);

            toastr.success("Register successful!");

            setTimeout(() => {
                window.location.href = "/pages/account.html";
            }, 1200);
        }else {
            toastr.error("Please check Terms of use & User Register Policy!");
        }

    });

    logOutButton.click(function() {
        window.localStorage.setItem("logged", "false");
        setTimeout(()=> {
            window.location.href="/index.html"
        }, 500)
    })



    /*
    * Purchase Functions
    * */

    purchaseTechnologyButton.click(function () {
        _purchaseClickFunction("#payment-total-amount", technologySectionDataForPurchase)
    });

    purchaseIndustryButton.click(function () {
        _purchaseClickFunction("#payment-total-amount", industrySectionDataForPurchase)
    });

    purchaseCompanyButton.click(function () {
        _purchaseClickFunction("#payment-total-amount", companySectionDataForPurchase)
    });

    const _purchaseClickFunction = function (divPlaceHolder, data) {
        console.log("Purchase Data: ",data);
        $(divPlaceHolder).html("$" + data.totalPrice);
        totalCreditsDiv.html("$"+totalCredits);
    };

    const _emailProspectRangeCalculation = function(quantity, type, sectionType) {
        let totalValue,unitPrice,totalPrice = 0.0;
        if (sectionType==="technology") {
            totalPriceTechnologyTR.removeAttr("hidden");
            purchaseButton.removeAttr("hidden");
            totalValue = $("tr.total-price-technology > td");
            unitPrice = technologySectionDataForPurchase.unitPrice;
            totalPrice = (unitPrice * quantity).toFixed(2);
            totalValue.html("$" + totalPrice);
            technologySectionDataForPurchase.totalPrice = totalPrice;
            if (type === "email") {
                technologySectionDataForPurchase.totalEmails =  quantity;
            }else {
                technologySectionDataForPurchase.totalProspects =  quantity;
            }

            if (quantity === 0) {
                totalPriceTechnologyTR.attr("hidden", true);
                purchaseButton.attr("hidden", true);
                technologySectionDataForPurchase.totalPrice = 0;
            }
        }
        else if (sectionType === "industry") {
            totalPriceIndustryTR.removeAttr("hidden");
            purchaseButton.removeAttr("hidden");
            totalValue = $("tr.total-price-industry > td");
            unitPrice = industrySectionDataForPurchase.unitPrice;
            totalPrice = (unitPrice * quantity).toFixed(2);
            totalValue.html("$" + totalPrice);
            industrySectionDataForPurchase.totalPrice = totalPrice;
            if (type === "email") {
                industrySectionDataForPurchase.totalEmails =  quantity;
            }else {
                industrySectionDataForPurchase.totalProspects =  quantity;
            }

            if (quantity === 0) {
                totalPriceIndustryTR.attr("hidden", true);
                purchaseButton.attr("hidden", true);
                industrySectionDataForPurchase.totalPrice = 0;
            }
        }
        else if (sectionType === "company") {
            totalPriceCompanyTR.removeAttr("hidden");
            purchaseButton.removeAttr("hidden");
            totalValue = $("tr.total-price-company > td");
            unitPrice = companySectionDataForPurchase.unitPrice;
            totalPrice = (unitPrice * quantity).toFixed(2);
            totalValue.html("$" + totalPrice);
            companySectionDataForPurchase.totalPrice = totalPrice;
            if (type === "email") {
                companySectionDataForPurchase.totalEmails =  quantity;
            }else {
                companySectionDataForPurchase.totalProspects =  quantity;
            }

            if (quantity === 0) {
                totalPriceCompanyTR.attr("hidden", true);
                purchaseButton.attr("hidden", true);
                companySectionDataForPurchase.totalPrice = 0;
            }
        }

    };



    /*
    * Document On Ready State
    * */
    $(document).ready(function () {
        console.log("✅ App is started!");
        if (window.localStorage.getItem("logged") === "true") {

            $("#logged").removeAttr("hidden");
            $("#visitor").attr("hidden",true);
        }else {

            $("#logged").attr("hidden");
            $("#visitor").removeAttr("hidden",true);
        }
        autoCompleteUL.empty();
        unitPriceTD.html("$"+technologySectionDataForPurchase.unitPrice);
        $(".company-search-quantity-range").ionRangeSlider({
            skin: "round",
            onStart: function (data) {
                // fired then range slider is ready
            },
            onChange: function (data) {
                if (quantityType==="email") {
                    companySectionDataForPurchase.totalEmails = data.from;
                }else {
                    companySectionDataForPurchase.totalProspects = data.from;
                }

                _emailProspectRangeCalculation(data.from, quantityType, "company")
            },
            onFinish: function (data) {
                // fired on pointer release
            },
            onUpdate: function (data) {
                // fired on changing slider with Update method
            }
        });
        $(".industry-search-quantity-range").ionRangeSlider({
            skin: "round",
            onStart: function (data) {
                // fired then range slider is ready
            },
            onChange: function (data) {
                if (quantityType==="email") {
                    industrySectionDataForPurchase.totalEmails = data.from;
                }else {
                    industrySectionDataForPurchase.totalProspects = data.from;
                }

                _emailProspectRangeCalculation(data.from, quantityType, "industry")
            },
            onFinish: function (data) {
                // fired on pointer release
            },
            onUpdate: function (data) {
                // fired on changing slider with Update method
            }
        });
        $(".technology-search-quantity-range").ionRangeSlider({
            skin: "round",
            onStart: function (data) {
                // fired then range slider is ready
            },
            onChange: function (data) {
                if (quantityType==="email") {
                    technologySectionDataForPurchase.totalEmails = data.from;
                }else {
                    technologySectionDataForPurchase.totalProspects = data.from;
                }

                _emailProspectRangeCalculation(data.from,quantityType, "technology")
            },
            onFinish: function (data) {
                // fired on pointer release
            },
            onUpdate: function (data) {
                // fired on changing slider with Update method
            }
        });
        $('select#company-size-input').select2({});
        $('select#technology-input').select2({});
        $("button.navbar-toggler").click(function () {
            $("header > nav").toggleClass("on-mobile");
        });
    });



    /*
    * Navbar Sticky Function
    * */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header > nav").addClass("sticky");
        } else {
            $("header > nav").removeClass("sticky");
        }
    });


